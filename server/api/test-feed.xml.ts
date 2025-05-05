// server/api/merchant-feed.xml.ts
import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  // Définir l'en-tête Content-Type pour XML
  event.node.res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  
  // Début du XML statique
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title><![CDATA[Pharmacie Agnès Praden - Produits santé et bien-être]]></title>
<description><![CDATA[Produits de pharmacie, parapharmacie et matériel médical disponibles à la Pharmacie Agnès Praden à Alès.]]></description>
<link>https://pharmacieagnespraden.com</link>


</channel>
</rss>`;
  
  return xml;
});