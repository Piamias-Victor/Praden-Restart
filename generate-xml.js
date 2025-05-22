// generate-xml.js
const fs = require('fs');
const { parse } = require('csv-parse/sync');

console.log('🚀 Début de la génération du fichier XML...');

// Informations boutique
const shopTitle = 'Pharmacie Agnès Praden - Produits santé et bien-être';
const shopDescription = 'Produits de pharmacie, parapharmacie et matériel médical disponibles à la Pharmacie Agnès Praden à Alès.';
const shopLink = 'https://pharmacieagnespraden.com';

// Début du XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[ ${shopTitle} ]]></title>
<description><![CDATA[ ${shopDescription} ]]></description>
<link>${shopLink}</link>
`;

try {
  // Lire le CSV
  const csvContent = fs.readFileSync('products_data.csv', 'utf8');
  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    delimiter: ',',
    quote: '"'
  });

  console.log(`📊 ${records.length} produits trouvés dans le CSV`);

  let processedCount = 0;

  // Traiter chaque produit
  for (const record of records) {
    // Vérifier les champs obligatoires
    if (!record.id || !record.title || !record.price || !record.image_link) {
      continue;
    }

    // Ajouter le produit au XML
    xml += `<item>
<title><![CDATA[ ${record.title} ]]></title>
<g:id>${record.id}</g:id>
<link><![CDATA[ ${record.link} ]]></link>
<g:price><![CDATA[ ${record.price} ]]></g:price>`;

    if (record.sale_price) {
      xml += `
<g:sale_price><![CDATA[ ${record.sale_price} ]]></g:sale_price>`;
    }

    xml += `
<description><![CDATA[ ${record.description || ''} ]]></description>
<g:condition><![CDATA[ ${record.condition || 'new'} ]]></g:condition>`;

    if (record.gtin) {
      xml += `
<g:gtin>${record.gtin}</g:gtin>`;
    } else {
      xml += `
<g:gtin/>`;
    }

    if (record.mpn) {
      xml += `
<g:mpn>${record.mpn}</g:mpn>`;
    } else {
      xml += `
<g:mpn/>`;
    }

    if (record.brand) {
      xml += `
<g:brand><![CDATA[ ${record.brand} ]]></g:brand>`;
    } else {
      xml += `
<g:brand/>`;
    }

    xml += `
<g:image_link><![CDATA[ ${record.image_link} ]]></g:image_link>`;

    // Images supplémentaires
    if (record.additional_images) {
      const additionalImages = record.additional_images.split('|');
      for (const img of additionalImages.slice(0, 10)) {
        if (img.trim()) {
          xml += `
<g:additional_image_link><![CDATA[ ${img.trim()} ]]></g:additional_image_link>`;
        }
      }
    }

    xml += `
<g:product_type><![CDATA[ ${record.product_type || 'PARAPHARMACIE'} ]]></g:product_type>
<g:availability><![CDATA[ ${record.availability || 'in stock'} ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>`;

    if (record.shipping_weight) {
      xml += `
<g:shipping_weight>${record.shipping_weight}</g:shipping_weight>`;
    }

    xml += `
<g:identifier_exists>${record.identifier_exists || 'FALSE'}</g:identifier_exists>`;

    if (record.is_medicine && record.is_medicine.toLowerCase() === 'true') {
      xml += `
<g:is_prescription_required>yes</g:is_prescription_required>`;
    }

    xml += `
<g:adwords_grouping/>
<g:adwords_labels/>
<g:adult>FALSE</g:adult>
</item>
`;

    processedCount++;
    if (processedCount % 1000 === 0) {
      console.log(`⏳ ${processedCount} produits traités...`);
    }
  }

  // Fermer le XML
  xml += `</channel>
</rss>`;

  // Créer le dossier public s'il n'existe pas
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
  }

  // Écrire le fichier XML
  fs.writeFileSync('public/merchant-feed.xml', xml, 'utf8');
  
  const fileSizeMB = (fs.statSync('public/merchant-feed.xml').size / 1024 / 1024).toFixed(2);
  
  console.log('✅ TERMINÉ !');
  console.log(`📝 ${processedCount} produits traités`);
  console.log(`📁 Fichier créé : public/merchant-feed.xml`);
  console.log(`📊 Taille : ${fileSizeMB} MB`);
  
} catch (error) {
  console.error('❌ ERREUR :', error.message);
}
