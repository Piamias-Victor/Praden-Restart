// server/api/merchant-feed-[chunk].xml.ts
import { defineEventHandler, getRouterParam } from 'h3';
import fs from 'fs';
import path from 'path';

export default defineEventHandler((event) => {
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  
  try {
    // Récupérer le numéro de chunk depuis l'URL
    const chunk = getRouterParam(event, 'chunk');
    
    if (!chunk) {
      throw new Error('Numéro de chunk manquant');
    }
    
    // Chemin vers le fichier XML du chunk
    const xmlPath = path.resolve(process.cwd(), `public/merchant-feed-${chunk}.xml`);
    
    // Vérifier si le fichier existe
    if (!fs.existsSync(xmlPath)) {
      throw new Error(`Fichier merchant-feed-${chunk}.xml non trouvé`);
    }
    
    // Lire et retourner le contenu du fichier
    const xmlContent = fs.readFileSync(xmlPath, 'utf8');
    return xmlContent;
  } catch (error) {
    console.error('Erreur lors du chargement du chunk XML:', error);
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[Pharmacie Agnès Praden - Erreur]]></title>
<description><![CDATA[Chunk XML non trouvé: ${error.message}]]></description>
<link>https://pharmacieagnespraden.com</link>
</channel>
</rss>`;
  }
});