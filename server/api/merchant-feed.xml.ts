// server/api/merchant-feed.xml.ts
import { defineEventHandler } from 'h3';
import { parse } from 'csv-parse/sync';
import * as fs from 'fs';
import * as path from 'path';

export default defineEventHandler(async (event) => {
  // Définir l'en-tête Content-Type pour XML
  event.node.res.setHeader('Content-Type', 'application/xml');
  
  // Informations sur la boutique
  const shopTitle = "Pharmacie Agnès Praden - Produits santé et bien-être";
  const shopDescription = "Produits de pharmacie, parapharmacie et matériel médical disponibles à la Pharmacie Agnès Praden à Alès.";
  const shopLink = "https://pharmacieagnespraden.com";
  
  try {
    // Commencer le XML
    let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    xml += "<rss xmlns:g=\"http://base.google.com/ns/1.0\" version=\"2.0\">\n";
    xml += "<channel>\n";
    xml += `<title><![CDATA[ ${shopTitle} ]]></title>\n`;
    xml += `<description><![CDATA[ ${shopDescription} ]]></description>\n`;
    xml += `<link>${shopLink}</link>\n`;
    
    // Chemin vers le fichier CSV
    const csvPath = path.resolve(process.cwd(), 'data/products_data.csv');
    
    // Vérifier si le fichier existe
    if (!fs.existsSync(csvPath)) {
      // Finaliser le XML vide
      xml += "</channel>\n";
      xml += "</rss>";
      return xml;
    }
    
    const csvContent = fs.readFileSync(csvPath, 'utf8');
    
    // Analyser le CSV
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
      delimiter: ',',
      quote: '"'
    });
    
    for (const record of records) {
      // Vérifier les champs obligatoires
      if (!record.id || !record.title || !record.price || !record.image_link) {
        continue; // Ignorer les produits incomplets
      }
      
      // Ajouter l'élément produit
      xml += "<item>\n";
      xml += `<title><![CDATA[ ${record.title} ]]></title>\n`;
      xml += `<g:id>${record.id}</g:id>\n`;
      xml += `<link><![CDATA[ ${record.link || `${shopLink}/product/${record.id}`} ]]></link>\n`;
      xml += `<g:price><![CDATA[ ${record.price} ]]></g:price>\n`;
      
      // Prix promotionnel
      if (record.sale_price) {
        xml += `<g:sale_price><![CDATA[ ${record.sale_price} ]]></g:sale_price>\n`;
      }
      
      // Description (éviter les descriptions trop longues)
      let description = record.description || "";
      if (description.length > 5000) {
        description = description.substring(0, 5000) + "...";
      }
      xml += `<description><![CDATA[ ${description} ]]></description>\n`;
      
      xml += `<g:condition><![CDATA[ ${record.condition || "new"} ]]></g:condition>\n`;
      
      // GTIN
      if (record.gtin) {
        xml += `<g:gtin>${record.gtin}</g:gtin>\n`;
      } else {
        xml += "<g:gtin/>\n";
      }
      
      // MPN
      if (record.mpn) {
        xml += `<g:mpn>${record.mpn}</g:mpn>\n`;
      } else {
        xml += "<g:mpn/>\n";
      }
      
      // Marque
      if (record.brand) {
        xml += `<g:brand><![CDATA[ ${record.brand} ]]></g:brand>\n`;
      } else {
        xml += "<g:brand/>\n";
      }
      
      xml += `<g:image_link><![CDATA[ ${record.image_link} ]]></g:image_link>\n`;
      
      // Images supplémentaires
      if (record.additional_images) {
        const additionalImages = record.additional_images.split('|');
        for (const img of additionalImages.slice(0, 10)) { // Limiter à 10 images max
          if (img.trim()) {
            xml += `<g:additional_image_link><![CDATA[ ${img.trim()} ]]></g:additional_image_link>\n`;
          }
        }
      }
      
      xml += `<g:product_type><![CDATA[ ${record.product_type || "PARAPHARMACIE"} ]]></g:product_type>\n`;
      xml += `<g:availability><![CDATA[ ${record.availability || "in stock"} ]]></g:availability>\n`;
      xml += "<g:quantity>0</g:quantity>\n";
      
      // Livraison
      xml += "<g:shipping>\n";
      xml += "<g:country>FR</g:country>\n";
      xml += "<g:price>0</g:price>\n";
      xml += "</g:shipping>\n";
      
      // Poids d'expédition
      if (record.shipping_weight) {
        xml += `<g:shipping_weight>${record.shipping_weight}</g:shipping_weight>\n`;
      }
      
      xml += `<g:identifier_exists>${record.identifier_exists || "FALSE"}</g:identifier_exists>\n`;
      
      // Médicament sur ordonnance
      if (record.is_medicine && record.is_medicine.toLowerCase() === "true") {
        xml += "<g:is_prescription_required>yes</g:is_prescription_required>\n";
      }
      
      xml += "<g:adwords_grouping/>\n";
      xml += "<g:adwords_labels/>\n";
      xml += "<g:adult>FALSE</g:adult>\n";
      xml += "</item>\n";
    }
    
    // Finaliser le XML
    xml += "</channel>\n";
    xml += "</rss>";
    
    return xml;
    
  } catch (error) {
    console.error("ERREUR lors de la génération du XML:", error);
    
    // En cas d'erreur, créer un fichier XML de base
    return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[ Pharmacie Agnès Praden - Erreur ]]></title>
<description><![CDATA[ Une erreur s'est produite lors de la génération du flux. ]]></description>
<link>https://pharmacieagnespraden.com</link>
</channel>
</rss>`;
  }
});