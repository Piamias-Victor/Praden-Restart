// server/api/merchant-feed.xml.ts
export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8');
  setHeader(event, 'Cache-Control', 'public, max-age=3600');
  
  try {
    const query = getQuery(event);
    const scrollId = query.scrollId as string;
    
    // Construction de l'URL avec les paramètres
    const baseUrl = 'https://ecommerce-backend-production.admin-a5f.workers.dev/merchant-center/';
    const params = new URLSearchParams();
    params.append('size', '1000'); // Récupère 1000 produits par page
    
    if (scrollId) {
      params.append('scrollId', scrollId);
    }
    
    const apiUrl = `${baseUrl}?${params.toString()}`;
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    const products = data.items || [];

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
      const price = product.price ? Math.round(product.price / 100) : 0;
      const imageUrl = (product.images && product.images.length > 0) ? product.images[0] : '';
      const description = product.description ? product.description.replace(/<[^>]*>/g, '').replace(/\r?\n/g, ' ').trim() : '';

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
<![CDATA[ ${description} ]]>
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
<g:shipping_weight>${product.weight ? (product.weight / 1000).toFixed(6) : '0.100000'} kilogrammes</g:shipping_weight>
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

  } catch (error) {
    console.error('Erreur dans merchant-feed:', error);
    return `<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[ Erreur - Pharmacie Agnès Praden ]]></title>
<description><![CDATA[ Erreur temporaire du flux produits: ${error.message} ]]></description>
<link>https://www.pharmacieagnespraden.com</link>
</channel>
</rss>`;
  }
});