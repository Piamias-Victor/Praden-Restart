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
    
    console.log('🔍 URL API appelée:', apiUrl);
    
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
    console.log('📦 Réponse API complète:', JSON.stringify(data, null, 2));
    console.log('📊 Nombre de produits reçus:', data.items?.length || 0);
    
    // Log du premier produit pour voir la structure
    if (data.items && data.items.length > 0) {
      console.log('🔬 Structure du premier produit:', JSON.stringify(data.items[0], null, 2));
    }
    
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

    products.forEach((product: any, index: number) => {
      // Log détaillé pour les 3 premiers produits
      if (index < 3) {
        console.log(`🔍 Produit ${index + 1}:`, {
          uuid: product.uuid,
          name: product.name,
          priceWithTax: product.priceWithTax,
          laboratory: product.laboratory,
          laboratoryName: product.laboratory?.name,
          availableStock: product.availableStock,
          images: product.images,
          promotions: product.promotions
        });
      }
      
      // Utilise priceWithTax avec les centimes (format XX.XX)
      const priceValue = product.priceWithTax ? product.priceWithTax / 100 : 0;
      const price = priceValue.toFixed(2);
      
      // Extrait le nom du laboratoire de l'objet
      const brandName = product.laboratory?.name || '';
      
      const imageUrl = (product.images && product.images.length > 0) ? product.images[0] : '';
      const description = product.description ? product.description.replace(/<[^>]*>/g, '').replace(/\r?\n/g, ' ').trim() : '';

      // Exclure les produits sans prix
      if (priceValue <= 0) {
        console.log(`⚠️ Produit exclu (prix = 0): ${product.name}`);
        return; // Skip ce produit
      }

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
<![CDATA[ ${brandName} ]]>
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

    console.log('✅ XML généré avec succès, longueur:', xml.length);
    return xml;

  } catch (error) {
    console.error('❌ Erreur dans merchant-feed:', error);
    return `<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[ Erreur - Pharmacie Agnès Praden ]]></title>
<description><![CDATA[ Erreur temporaire du flux produits: ${error.message} ]]></description>
<link>https://www.pharmacieagnespraden.com</link>
</channel>
</rss>`;
  }
});
