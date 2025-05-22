// server/api/merchant-feed.xml.ts
import { defineEventHandler } from 'h3';
import fs from 'fs';
import path from 'path';

export default defineEventHandler((event) => {
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  
  try {
    // Compter combien de chunks existent
    const publicDir = path.resolve(process.cwd(), 'public');
    const files = fs.readdirSync(publicDir);
    const chunks = files.filter(file => file.match(/^merchant-feed-\d+\.xml$/));
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[Pharmacie Agnès Praden - Index des flux]]></title>
<description><![CDATA[Liste des flux de produits disponibles]]></description>
<link>https://pharmacieagnespraden.com</link>
`;

    chunks.sort().forEach((filename, index) => {
      const chunkNumber = filename.match(/merchant-feed-(\d+)\.xml/)[1];
      xml += `<item>
<title><![CDATA[Flux de produits ${chunkNumber}]]></title>
<g:id>flux-${chunkNumber}</g:id>
<link><![CDATA[https://pharmacieagnespraden.com/api/merchant-feed-${chunkNumber}.xml]]></link>
<description><![CDATA[Flux ${chunkNumber} contenant environ 2000 produits]]></description>
<g:condition><![CDATA[new]]></g:condition>
<g:availability><![CDATA[in stock]]></g:availability>
</item>
`;
    });

    xml += `</channel>
</rss>`;

    return xml;
  } catch (error) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[Pharmacie Agnès Praden - Erreur]]></title>
<description><![CDATA[Impossible de générer l'index]]></description>
<link>https://pharmacieagnespraden.com</link>
</channel>
</rss>`;
  }
});