// generate-xml-chunks.js
const fs = require('fs');
const { parse } = require('csv-parse/sync');

const CHUNK_SIZE = 2000; // 2000 produits par fichier (plus gérable)

console.log('🚀 Génération de fichiers XML par chunks...');

const shopTitle = 'Pharmacie Agnès Praden - Produits santé et bien-être';
const shopDescription = 'Produits de pharmacie, parapharmacie et matériel médical disponibles à la Pharmacie Agnès Praden à Alès.';
const shopLink = 'https://pharmacieagnespraden.com';

try {
  const csvContent = fs.readFileSync('data/products_data.csv', 'utf8');
  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    delimiter: ',',
    quote: '"'
  });

  console.log(`📊 ${records.length} produits trouvés dans le CSV`);

  // Filtrer les produits valides
  const validProducts = records.filter(record => 
    record.id && record.title && record.price && record.image_link
  );

  console.log(`✅ ${validProducts.length} produits valides`);

  // Créer des chunks
  const chunks = [];
  for (let i = 0; i < validProducts.length; i += CHUNK_SIZE) {
    chunks.push(validProducts.slice(i, i + CHUNK_SIZE));
  }

  console.log(`📦 ${chunks.length} fichiers XML à créer`);

  // Créer le dossier public s'il n'existe pas
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
  }

  // Générer chaque chunk
  chunks.forEach((chunk, index) => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[ ${shopTitle} - Partie ${index + 1} ]]></title>
<description><![CDATA[ ${shopDescription} ]]></description>
<link>${shopLink}</link>
`;

    chunk.forEach(record => {
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
    });

    xml += `</channel>
</rss>`;

    const filename = `merchant-feed-${index + 1}.xml`;
    fs.writeFileSync(`public/${filename}`, xml, 'utf8');
    
    const fileSizeMB = (fs.statSync(`public/${filename}`).size / 1024 / 1024).toFixed(2);
    console.log(`✅ Créé: ${filename} (${chunk.length} produits, ${fileSizeMB} MB)`);
  });

  console.log('🎉 TERMINÉ !');
  console.log(`📋 ${chunks.length} fichiers XML créés`);
  console.log(`📊 Total: ${validProducts.length} produits`);
  
} catch (error) {
  console.error('❌ ERREUR:', error.message);
}