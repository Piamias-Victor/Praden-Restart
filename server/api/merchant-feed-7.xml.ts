import { defineEventHandler } from 'h3';
import fs from 'fs';
import path from 'path';

export default defineEventHandler((event) => {
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  
  try {
    // Lire les données depuis le fichier JSON
    const dataPath = path.resolve('./data/products-chunk-7.json');
    const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    // Générer le XML dynamiquement
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[ Pharmacie Agnès Praden - Produits santé et bien-être - Partie 7 ]]></title>
<description><![CDATA[ Produits de pharmacie, parapharmacie et matériel médical disponibles à la Pharmacie Agnès Praden à Alès. ]]></description>
<link>https://pharmacieagnespraden.com</link>
`;

    jsonData.forEach(product => {
      xml += `<item>
<title><![CDATA[ ${product.title} ]]></title>
<g:id>${product.id}</g:id>
<link><![CDATA[ ${product.link} ]]></link>
<g:price><![CDATA[ ${product.price} ]]></g:price>
<description><![CDATA[ ${product.description} ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>${product.gtin}</g:gtin>
<g:brand><![CDATA[ ${product.brand} ]]></g:brand>
<g:image_link><![CDATA[ ${product.image_link} ]]></g:image_link>
<g:product_type><![CDATA[ ${product.product_type} ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>${product.identifier_exists}</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
`;
    });

    xml += `</channel>
</rss>`;

    return xml;
    
  } catch (error) {
    console.error('Erreur lors de la génération du flux:', error);
    return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title>Erreur</title>
<description>Erreur lors de la génération du flux</description>
</channel>
</rss>`;
  }
});
