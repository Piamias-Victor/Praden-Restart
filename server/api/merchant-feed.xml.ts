import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[Pharmacie Agnès Praden - Produits santé et bien-être - Index]]></title>
<description><![CDATA[Index des flux produits]]></description>
<link>https://pharmacieagnespraden.com</link>
`;

  for (let i = 1; i <= 17; i++) {
    xml += `<item>
<title><![CDATA[Flux ${i}]]></title>
<g:id>flux-${i}</g:id>
<link><![CDATA[https://pharmacieagnespraden.com/api/merchant-feed-${i}.xml]]></link>
<description><![CDATA[Flux ${i} - 600 produits]]></description>
</item>
`;
  }

  xml += `</channel></rss>`;
  return xml;
});
