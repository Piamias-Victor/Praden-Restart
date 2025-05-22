// server/api/merchant-feed.xml.ts
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const page = parseInt(query.page as string) || 1;
  const limit = 1000; // Produits par page

  // Lecture du CSV
  const csvPath = path.join(process.cwd(), 'data/products_data.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');

  // Parse CSV
  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
  });

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const products = records.slice(startIndex, endIndex);

  // Génération XML selon le format exact demandé
  let xml = `<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title>
<![CDATA[ Pharmacie Agnès Praden : pharmacie en ligne, parapharmacie, cosmétiques ]]>
</title>
<description>
<![CDATA[ Notre pharmacie en ligne propose un large choix de produits de parapharmacie, cosmétiques et médicaments. Service professionnel et livraison rapide. ]]>
</description>
<link>https://www.pharmacieagnespraden.com</link>`;

  products.forEach((product: any) => {
    // Calcul du prix (enlever centimes si nécessaire)
    const price = product.price ? Math.round(parseFloat(product.price) / 100) : 0;

    xml += `
<item>
<title>
<![CDATA[ ${product.name || ''} ]]>
</title>
<g:id>${product.uuid || product.id || ''}</g:id>
<link>
<![CDATA[ https://www.pharmacieagnespraden.com/products/${product.uuid || product.id} ]]>
</link>
<g:price>
<![CDATA[ ${price} ]]>
</g:price>
<description>
<![CDATA[ ${product.description || ''} ]]>
</description>
<g:condition>
<![CDATA[ new ]]>
</g:condition>
<g:gtin/>
<g:mpn/>
<g:brand>
<![CDATA[ ${product.laboratory || ''} ]]>
</g:brand>
<g:image_link>
<![CDATA[ ${product.images || product.image || ''} ]]>
</g:image_link>
<g:product_type>
<![CDATA[ Parapharmacie > Santé ]]>
</g:product_type>
<g:availability>
<![CDATA[ ${product.stock > 0 ? 'in stock' : 'out of stock'} ]]>
</g:availability>
<g:quantity>${product.stock || 0}</g:quantity>
<g:shipping>
<g:country>FR</g:country>
<g:price>5</g:price>
</g:shipping>
<g:shipping_weight>0.100000 kilogrammes</g:shipping_weight>
<g:identifier_exists>FALSE</g:identifier_exists>
<g:adwords_grouping/>
<g:adwords_labels/>
<g:adult>FALSE</g:adult>
</item>`;
  });

  xml += `
</channel>
</rss>`;

  // Headers pour XML
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8');
  setHeader(event, 'Cache-Control', 'public, max-age=3600'); // Cache 1h

  return xml;
});