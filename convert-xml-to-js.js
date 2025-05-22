// convert-xml-to-js.js
const fs = require('fs');

try {
  console.log('🔄 Conversion du XML en module JS...');
  
  // Lire le fichier XML
  const xmlContent = fs.readFileSync('public/merchant-feed.xml', 'utf8');
  console.log(`📊 Taille du XML : ${(xmlContent.length / 1024 / 1024).toFixed(2)} MB`);
  
  // Échapper les caractères spéciaux pour JavaScript
  const escapedXml = xmlContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
  
  // Créer le contenu du module JS
  const jsContent = `// Ce fichier est généré automatiquement - ne pas modifier
export const xmlContent = \`${escapedXml}\`;
`;
  
  // Créer le dossier server s'il n'existe pas
  if (!fs.existsSync('server')) {
    fs.mkdirSync('server');
  }
  
  // Écrire le fichier JS
  fs.writeFileSync('server/xml-data.js', jsContent, 'utf8');
  
  const fileSizeMB = (fs.statSync('server/xml-data.js').size / 1024 / 1024).toFixed(2);
  
  console.log('✅ Conversion terminée !');
  console.log(`📁 Fichier créé : server/xml-data.js`);
  console.log(`📊 Taille : ${fileSizeMB} MB`);
} catch (error) {
  console.error('❌ Erreur:', error.message);
}