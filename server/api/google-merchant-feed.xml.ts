// server/api/google-merchant-feed.xml.ts
import { defineEventHandler } from 'h3';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export default defineEventHandler(async (event) => {
  // Définir l'en-tête Content-Type pour XML
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  
  // Informations sur la boutique
  const shopTitle = 'Pharmacie Agnès Praden - Produits santé et bien-être';
  const shopDescription = 'Produits de pharmacie, parapharmacie et matériel médical disponibles à la Pharmacie Agnès Praden à Alès.';
  const shopLink = 'https://pharmacieagnespraden.com';
  
  // Commencer le XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">\n';
  xml += '<channel>\n';
  xml += `<title><![CDATA[ ${shopTitle} ]]></title>\n`;
  xml += `<description><![CDATA[ ${shopDescription} ]]></description>\n`;
  xml += `<link>${shopLink}</link>\n`;
  
  try {
    // Chemin vers le fichier CSV à la racine du projet
    const csvPath = path.resolve(process.cwd(), 'products_data.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf8');
    
    // Analyser le CSV
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
      delimiter: ',',
      quote: '"'
    });
    
    // Compteur pour limiter le nombre de produits en cas de test
    let count = 0;
    
    for (const record of records) {
      // Vérifier si les champs obligatoires sont présents
      if (!record.id || !record.title || !record.price || !record.image_link) {
        continue;
      }
      
      // Ajouter l'élément produit
      xml += '<item>\n';
      xml += `<title><![CDATA[ ${record.title} ]]></title>\n`;
      xml += `<g:id>${record.id}</g:id>\n`;
      xml += `<link><![CDATA[ ${record.link} ]]></link>\n`;
      xml += `<g:price><![CDATA[ ${record.price} ]]></g:price>\n`;
      
      // Prix promo
      if (record.sale_price) {
        xml += `<g:sale_price><![CDATA[ ${record.sale_price} ]]></g:sale_price>\n`;
      }
      
      xml += `<description><![CDATA[ ${record.description || ''} ]]></description>\n`;
      xml += `<g:condition><![CDATA[ ${record.condition || 'new'} ]]></g:condition>\n`;
      
      // GTIN
      if (record.gtin) {
        xml += `<g:gtin>${record.gtin}</g:gtin>\n`;
      } else {
        xml += '<g:gtin/>\n';
      }
      
      // MPN
      if (record.mpn) {
        xml += `<g:mpn>${record.mpn}</g:mpn>\n`;
      } else {
        xml += '<g:mpn/>\n';
      }
      
      // Marque
      if (record.brand) {
        xml += `<g:brand><![CDATA[ ${record.brand} ]]></g:brand>\n`;
      } else {
        xml += '<g:brand/>\n';
      }
      
      xml += `<g:image_link><![CDATA[ ${record.image_link} ]]></g:image_link>\n`;
      
      // Images supplémentaires si disponibles
      if (record.additional_images) {
        const additionalImages = record.additional_images.split('|');
        for (const img of additionalImages) {
          if (img.trim()) {
            xml += `<g:additional_image_link><![CDATA[ ${img.trim()} ]]></g:additional_image_link>\n`;
          }
        }
      }
      
      xml += `<g:product_type><![CDATA[ ${record.product_type || 'PARAPHARMACIE'} ]]></g:product_type>\n`;
      xml += `<g:availability><![CDATA[ ${record.availability || 'in stock'} ]]></g:availability>\n`;
      xml += '<g:quantity>0</g:quantity>\n';
      
      // Informations d'expédition
      xml += '<g:shipping>\n';
      xml += '<g:country>FR</g:country>\n';
      xml += '<g:price>0</g:price>\n';
      xml += '</g:shipping>\n';
      
      // Poids d'expédition
      if (record.shipping_weight) {
        xml += `<g:shipping_weight>${record.shipping_weight}</g:shipping_weight>\n`;
      }
      
      xml += `<g:identifier_exists>${record.identifier_exists || 'FALSE'}</g:identifier_exists>\n`;
      
      // Indiquer s'il s'agit d'un médicament
      if (record.is_medicine && record.is_medicine.toLowerCase() === 'true') {
        xml += '<g:is_prescription_required>yes</g:is_prescription_required>\n';
      }
      
      xml += '<g:adwords_grouping/>\n';
      xml += '<g:adwords_labels/>\n';
      xml += '<g:adult>FALSE</g:adult>\n';
      xml += '</item>\n';
      
      // Incrémenter le compteur
      count++;
    }
    
    console.log(`Nombre de produits traités: ${count}`);
    
    // Finaliser le XML
    xml += '</channel>\n';
    xml += '</rss>';
    
    return xml;
  } catch (error) {
    console.error('Erreur lors de la génération du XML:', error);
    
    // En cas d'erreur, retourner un XML minimal avec un message d'erreur
    return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[Pharmacie Agnès Praden - Erreur]]></title>
<description><![CDATA[Une erreur est survenue lors de la génération du flux: ${error.message}]]></description>
<link>https://pharmacieagnespraden.com</link>
</channel>
</rss>`;
  }
});