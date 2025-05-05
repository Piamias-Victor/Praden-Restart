// server/api/merchant-feed.xml.ts
import { defineEventHandler } from 'h3';
import fs from 'fs';
import path from 'path';

export default defineEventHandler((event) => {
  // Définir l'en-tête Content-Type pour XML
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  
  try {
    // Chemin vers le fichier XML statique dans le dossier public
    const xmlPath = path.resolve(process.cwd(), 'public/merchant-feed.xml');
    
    // Vérifier si le fichier existe
    if (!fs.existsSync(xmlPath)) {
      console.error('Le fichier merchant-feed.xml est introuvable dans le dossier public');
      
      // Retourner un XML minimal pour indiquer l'erreur
      return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[Pharmacie Agnès Praden - Erreur]]></title>
<description><![CDATA[Le fichier de flux n'a pas été généré. Veuillez exécuter le script de génération.]]></description>
<link>https://pharmacieagnespraden.com</link>
</channel>
</rss>`;
    }
    
    // Lire et renvoyer le contenu du fichier XML
    const xmlContent = fs.readFileSync(xmlPath, 'utf8');
    return xmlContent;
  } catch (error) {
    console.error('Erreur lors de la lecture du fichier XML:', error);
    
    // En cas d'erreur, retourner un XML minimal avec un message d'erreur
    return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[Pharmacie Agnès Praden - Erreur]]></title>
<description><![CDATA[Une erreur est survenue lors de l'accès au flux.]]></description>
<link>https://pharmacieagnespraden.com</link>
</channel>
</rss>`;
  }
});