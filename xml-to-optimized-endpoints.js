// xml-to-optimized-endpoints.js
const fs = require('fs');
const { parse } = require('csv-parse/sync');

const PRODUCTS_PER_FILE = 600;

console.log('🚀 Génération d\'endpoints TypeScript optimisés...');

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

  // Créer des chunks
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
  if (!fs.existsSync('data')) fs.mkdirSync('data');

  // SOLUTION 1: Stocker les données JSON séparément
  chunks.forEach((chunk, index) => {
    const chunkNumber = index + 1;
    
    // Sauvegarder les données dans un fichier JSON
    const jsonData = chunk.map(record => ({
      id: record.id,
      title: (record.title || '').substring(0, 150),
      link: record.link,
      price: record.price,
      description: (record.description || '').substring(0, 500),
      gtin: record.gtin || '',
      brand: (record.brand || '').substring(0, 50),
      image_link: record.image_link,
      product_type: record.product_type || 'PARAPHARMACIE',
      identifier_exists: record.identifier_exists || 'FALSE'
    }));

    // Sauvegarder le JSON
    fs.writeFileSync(`data/products-chunk-${chunkNumber}.json`, JSON.stringify(jsonData), 'utf8');

    // Créer un endpoint TypeScript léger qui lit le JSON
    const tsContent = `import { defineEventHandler } from 'h3';
import fs from 'fs';
import path from 'path';

export default defineEventHandler((event) => {
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  
  try {
    // Lire les données depuis le fichier JSON
    const dataPath = path.resolve('./data/products-chunk-${chunkNumber}.json');
    const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    // Générer le XML dynamiquement
    let xml = \`<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[ ${shopTitle} - Partie ${chunkNumber} ]]></title>
<description><![CDATA[ ${shopDescription} ]]></description>
<link>${shopLink}</link>
\`;

    jsonData.forEach(product => {
      xml += \`<item>
<title><![CDATA[ \${product.title} ]]></title>
<g:id>\${product.id}</g:id>
<link><![CDATA[ \${product.link} ]]></link>
<g:price><![CDATA[ \${product.price} ]]></g:price>
<description><![CDATA[ \${product.description} ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>\${product.gtin}</g:gtin>
<g:brand><![CDATA[ \${product.brand} ]]></g:brand>
<g:image_link><![CDATA[ \${product.image_link} ]]></g:image_link>
<g:product_type><![CDATA[ \${product.product_type} ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>\${product.identifier_exists}</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
\`;
    });

    xml += \`</channel>
</rss>\`;

    return xml;
    
  } catch (error) {
    console.error('Erreur lors de la génération du flux:', error);
    return \`<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title>Erreur</title>
<description>Erreur lors de la génération du flux</description>
</channel>
</rss>\`;
  }
});
`;

    const filename = `server/api/merchant-feed-${chunkNumber}.xml.ts`;
    fs.writeFileSync(filename, tsContent, 'utf8');
    
    const fileSizeKB = (fs.statSync(filename).size / 1024).toFixed(0);
    console.log(`✅ Créé: merchant-feed-${chunkNumber}.xml.ts (${chunk.length} produits, ${fileSizeKB} KB)`);
  });

  // SOLUTION 2: Endpoint index optimisé
  const indexContent = `import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  
  const totalChunks = ${chunks.length};
  const shopTitle = '${shopTitle}';
  const shopLink = '${shopLink}';
  
  let xml = \`<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[\${shopTitle} - Index]]></title>
<description><![CDATA[Index des flux produits]]></description>
<link>\${shopLink}</link>
\`;

  for (let i = 1; i <= totalChunks; i++) {
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
  console.log(`📋 ${chunks.length} fichiers TypeScript légers créés`);
  console.log(`📊 ${chunks.length} fichiers JSON avec les données`);
  console.log(`📈 Total: ${validProducts.length} produits`);
  
} catch (error) {
  console.error('❌ ERREUR :', error.message);
}

// SOLUTION 3: Version encore plus optimisée avec streaming
// Alternative: générer un seul endpoint qui stream les données

const generateStreamingEndpoint = () => {
  const streamingContent = `import { defineEventHandler } from 'h3';
import fs from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  const chunkParam = getQuery(event).chunk;
  const chunkNumber = parseInt(chunkParam as string) || 1;
  const maxChunks = ${chunks.length};
  
  if (chunkNumber < 1 || chunkNumber > maxChunks) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Chunk non trouvé'
    });
  }
  
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  event.node.res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache 1h
  
  try {
    const dataPath = path.resolve(\`./data/products-chunk-\${chunkNumber}.json\`);
    
    if (!fs.existsSync(dataPath)) {
      throw new Error('Fichier de données non trouvé');
    }
    
    const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    // Header XML
    let xml = \`<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[${shopTitle} - Partie \${chunkNumber}]]></title>
<description><![CDATA[${shopDescription}]]></description>
<link>${shopLink}</link>
\`;

    // Traiter les produits par petits groupes pour éviter la surcharge mémoire
    const BATCH_SIZE = 50;
    for (let i = 0; i < jsonData.length; i += BATCH_SIZE) {
      const batch = jsonData.slice(i, i + BATCH_SIZE);
      
      batch.forEach(product => {
        xml += \`<item>
<title><![CDATA[ \${product.title} ]]></title>
<g:id>\${product.id}</g:id>
<link><![CDATA[ \${product.link} ]]></link>
<g:price><![CDATA[ \${product.price} ]]></g:price>
<description><![CDATA[ \${product.description} ]]></description>
<g:condition><![CDATA[ new ]]></g:condition>
<g:gtin>\${product.gtin}</g:gtin>
<g:brand><![CDATA[ \${product.brand} ]]></g:brand>
<g:image_link><![CDATA[ \${product.image_link} ]]></g:image_link>
<g:product_type><![CDATA[ \${product.product_type} ]]></g:product_type>
<g:availability><![CDATA[ in stock ]]></g:availability>
<g:quantity>0</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>0</g:price>
</g:shipping>
<g:identifier_exists>\${product.identifier_exists}</g:identifier_exists>
<g:adult>FALSE</g:adult>
</item>
\`;
      });
    }

    xml += \`</channel>
</rss>\`;

    return xml;
    
  } catch (error) {
    console.error('Erreur lors de la génération du flux:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de la génération du flux'
    });
  }
});
`;

  fs.writeFileSync('server/api/merchant-feed-streaming.xml.ts', streamingContent, 'utf8');
  console.log('✅ Endpoint streaming créé: merchant-feed-streaming.xml.ts');
  console.log('📝 Utilisation: /api/merchant-feed-streaming.xml?chunk=1');
};

// Décommenter pour générer l'endpoint streaming
// generateStreamingEndpoint();