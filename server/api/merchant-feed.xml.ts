// server/api/merchant-feed.xml.ts
export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const page = parseInt(query.page as string) || 1;
    const limit = 1000;

    // Utilise ton API sitemap qui contient tous les produits
    const apiUrl = 'https://ecommerce-backend-production.admin-a5f.workers.dev/sitemap';
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const sitemapProducts = await response.json();
    
    
    // Récupérer les détails de chaque produit pour vérifier arePromotionsAllowed
    const productDetailsPromises = sitemapProducts.slice(0, 2000).map(async (product: any) => {
      try {
        const detailResponse = await fetch(`https://ecommerce-backend-production.admin-a5f.workers.dev/products/${product.uuid}`);
        if (detailResponse.ok) {
          const detailData = await detailResponse.json();
          return detailData.item;
        }
        return null;
      } catch (error) {
        console.error(`Erreur pour le produit ${product.uuid}:`, error);
        return null;
      }
    });

    const allProductDetails = await Promise.all(productDetailsPromises);
    
    // Filtrer seulement les produits avec arePromotionsAllowed = true
    const filteredProducts = allProductDetails.filter((product: any) => 
      product && 
      product.flags && 
      product.flags.arePromotionsAllowed === true
    );

    // Pagination sur les produits filtrés
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    const xml = generateXML(paginatedProducts);

    setHeader(event, 'Content-Type', 'application/xml; charset=utf-8');
    setHeader(event, 'Cache-Control', 'public, max-age=3600');

    return xml;

  } catch (error) {
    console.error('Erreur dans merchant-feed:', error);
    
    const errorXml = `<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[ Erreur - Pharmacie Agnès Praden ]]></title>
<description><![CDATA[ Erreur temporaire du flux produits: ${error.message} ]]></description>
<link>https://www.pharmacieagnespraden.com</link>
</channel>
</rss>`;

    setHeader(event, 'Content-Type', 'application/xml; charset=utf-8');
    return errorXml;
  }
});

function generateXML(products: any[]) {
  let xml = `<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title>
<![CDATA[ Pharmacie Agnès Praden : pharmacie en ligne, parapharmacie, cosmétiques ]]>
</title>
<description>
<![CDATA[ Notre pharmacie en ligne propose un large choix de produits de parapharmacie, cosmétiques et médicaments. Service professionnel et livraison rapide. ]]>
</description>
<link>https://www.pharmacieagnespraden.com</link>`;

  products.forEach((product: any) => {
    // Conversion du prix de centimes en euros
    const price = product.price ? Math.round(product.price / 100) : 0;
    
    // Première image du tableau
    const imageUrl = product.images && product.images.length > 0 ? product.images[0] : '';

    xml += `
<item>
<title>
<![CDATA[ ${product.name || 'Produit'} ]]>
</title>
<g:id>${product.uuid || 'unknown'}</g:id>
<link>
<![CDATA[ https://www.pharmacieagnespraden.com/products/${product.uuid || 'unknown'} ]]>
</link>
<g:price>
<![CDATA[ ${price} ]]>
</g:price>
<description>
<![CDATA[ ${product.description ? product.description.replace(/<[^>]*>/g, '') : ''} ]]>
</description>
<g:condition>
<![CDATA[ new ]]>
</g:condition>
<g:gtin/>
<g:mpn/>
<g:brand>
<![CDATA[ ${product.laboratory || ''} ]]>
</g:brand>
<g:image_link>
<![CDATA[ ${imageUrl} ]]>
</g:image_link>
<g:product_type>
<![CDATA[ Parapharmacie > Santé ]]>
</g:product_type>
<g:availability>
<![CDATA[ ${product.availableStock > 0 ? 'in stock' : 'out of stock'} ]]>
</g:availability>
<g:quantity>${product.availableStock || 0}</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>5</g:price>
</g:shipping>
<g:shipping_weight>${(product.weight || 100) / 1000} kilogrammes</g:shipping_weight>
<g:identifier_exists>FALSE</g:identifier_exists>
<g:adwords_grouping/>
<g:adwords_labels/>
<g:adult>FALSE</g:adult>
</item>`;
  });

  xml += `
</channel>
</rss>`;

  return xml;
}