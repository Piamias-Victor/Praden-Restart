// xml-to-small-endpoints.js
const fs = require('fs');
const { parse } = require('csv-parse/sync');

const PRODUCTS_PER_FILE = 600; // 600 produits par fichier pour rester sous 1MB

console.log('🚀 Génération de petits endpoints TypeScript...');

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

  // Filtrer les produits valides
  const validProducts = records.filter(record => 
    record.id && record.title && record.price && record.image_link
  );

  console.log(`✅ ${validProducts.length} produits valides`);

  // Créer des chunks plus petits
  const chunks = [];
  for (let i = 0; i < validProducts.length; i += PRODUCTS_PER_FILE) {
    chunks.push(validProducts.slice(i, i + PRODUCTS_PER_FILE));
  }

  console.log(`📦 ${chunks.length} fichiers à créer`);

  // Supprimer les anciens fichiers
  if (fs.existsSync('server/api')) {
    const files = fs.readdirSync('server/api');
    files.filter(f => f.startsWith('merchant-feed')).forEach(f => {
      fs.unlinkSync(`server/api/${f}`);
      console.log(`🗑️ Supprimé: ${f}`);
    });
  }

  // Créer les dossiers
  if (!fs.existsSync('server')) fs.mkdirSync('server');
  if (!fs.existsSync('server/api')) fs.mkdirSync('server/api');

  // Générer chaque chunk
  chunks.forEach((chunk, index) => {
    const chunkNumber = index + 1;
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[ ${shopTitle} - Partie ${chunkNumber} ]]></title>
<description><![CDATA[ ${shopDescription} ]]></description>
<link>${shopLink}</link>
`;

    chunk.forEach(record => {
      // Simplifier les données pour réduire la taille
      const cleanTitle = (record.title || '').substring(0, 150); // Limiter le titre
      const cleanDescription = (record.description || '').substring(0, 500); // Description plus courte

      xml += `<item>
<title><![CDATA[ ${cleanTitle} ]]></title>
<g:id>${record.id}</g:id>
<link><![CDATA[ ${record.link} ]]></link>
<g:price><![CDATA[ ${record.price} ]]></g:price>
<description><![CDATA[ ${cleanDescription} ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>${record.gtin || ''}</g:gtin>
<g:brand><![CDATA[ ${(record.brand || '').substring(0, 50)} ]]></g:brand>
<g:image_link><![CDATA[ ${record.image_link} ]]></g:image_link>
<g:product_type><![CDATA[ ${record.product_type || 'PARAPHARMACIE'} ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>${record.identifier_exists || 'FALSE'}</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
`;
    });

    xml += `</channel>
</rss>`;

    // Échapper pour TypeScript
    const escapedXml = xml
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$\{/g, '\\${');

    const tsContent = `import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  
  return \`${escapedXml}\`;
});
`;

    const filename = `server/api/merchant-feed-${chunkNumber}.xml.ts`;
    fs.writeFileSync(filename, tsContent, 'utf8');
    
    const fileSizeKB = (fs.statSync(filename).size / 1024).toFixed(0);
    console.log(`✅ Créé: merchant-feed-${chunkNumber}.xml.ts (${chunk.length} produits, ${fileSizeKB} KB)`);
  });

  // Créer l'endpoint principal
  const indexContent = `import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  
  let xml = \`<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[${shopTitle} - Index]]></title>
<description><![CDATA[Index des flux produits]]></description>
<link>${shopLink}</link>
\`;

  for (let i = 1; i <= ${chunks.length}; i++) {
    xml += \`<item>
<title><![CDATA[Flux \${i}]]></title>
<g:id>flux-\${i}</g:id>
<link><![CDATA[https://pharmacieagnespraden.com/api/merchant-feed-\${i}.xml]]></link>
<description><![CDATA[Flux \${i} - ${PRODUCTS_PER_FILE} produits]]></description>
</item>
\`;
  }

  xml += \`</channel></rss>\`;
  return xml;
});
`;

  fs.writeFileSync('server/api/merchant-feed.xml.ts', indexContent, 'utf8');

  console.log('🎉 TERMINÉ !');
  console.log(`📋 ${chunks.length} fichiers créés (600 produits par fichier)`);
  console.log(`📊 Total: ${validProducts.length} produits`);
  
} catch (error) {
  console.error('❌ ERREUR :', error.message);
}
