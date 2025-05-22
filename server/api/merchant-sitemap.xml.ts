// server/api/merchant-sitemap.xml.ts
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export default defineEventHandler(async (event) => {
  const csvPath = path.join(process.cwd(), 'data/products_data.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const records = parse(csvContent, { columns: true, skip_empty_lines: true });

  const limit = 1000;
  const totalPages = Math.ceil(records.length / limit);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.pharmacieagnespraden.com/api/merchant-feed.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`;

  // Générer les liens pour chaque page
  for (let i = 1; i <= totalPages; i++) {
    xml += `
  <sitemap>
    <loc>https://www.pharmacieagnespraden.com/api/merchant-feed.xml?page=${i}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`;
  }

  xml += `
</sitemapindex>`;

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8');
  setHeader(event, 'Cache-Control', 'public, max-age=86400'); // Cache 24h

  return xml;
});