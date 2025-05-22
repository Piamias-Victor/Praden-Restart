// server/api/merchant-feed.xml.ts
import { defineEventHandler } from 'h3';
import fs from 'fs';
import path from 'path';
import { gzip } from 'zlib';
import { promisify } from 'util';

const gzipAsync = promisify(gzip);

export default defineEventHandler(async (event) => {
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  
  try {
    const xmlPath = path.resolve(process.cwd(), 'public/merchant-feed.xml');
    const xmlContent = fs.readFileSync(xmlPath, 'utf8');
    
    // Si le fichier est gros, le compresser
    if (xmlContent.length > 1000000) { // Plus de 1MB
      event.node.res.setHeader('Content-Encoding', 'gzip');
      const compressed = await gzipAsync(Buffer.from(xmlContent, 'utf8'));
      return compressed;
    }
    
    return xmlContent;
  } catch (error) {
    console.error('Erreur XML:', error);
    return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[Pharmacie Agnès Praden - Erreur]]></title>
<description><![CDATA[Fichier XML non trouvé: ${error.message}]]></description>
<link>https://pharmacieagnespraden.com</link>
</channel>
</rss>`;
  }
});
