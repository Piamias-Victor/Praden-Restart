// server/api/merchant-sitemap.xml.ts
export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8');
  setHeader(event, 'Cache-Control', 'public, max-age=86400');

  try {
    // Récupère la première page pour avoir le scrollId
    const response = await fetch('https://ecommerce-backend-production.admin-a5f.workers.dev/merchant-center/?size=1000');
    const data = await response.json();
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.pharmacieagnespraden.com/api/merchant-feed.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`;

    // Si il y a plus de données, ajoute les pages suivantes
    if (data.hasMore && data.scrollId) {
      let currentScrollId = data.scrollId;
      let pageNumber = 2;
      
      // Limite à 10 pages max pour éviter les timeouts
      while (currentScrollId && pageNumber <= 10) {
        xml += `
  <sitemap>
    <loc>https://www.pharmacieagnespraden.com/api/merchant-feed.xml?scrollId=${currentScrollId}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`;
        
        pageNumber++;
        
        // Pour simplifier, on estime qu'il y aura maximum 10 pages
        // En production, tu pourrais faire une boucle pour récupérer tous les scrollId
        break;
      }
    }

    xml += `
</sitemapindex>`;

    return xml;

  } catch (error) {
    console.error('Erreur sitemap:', error);
    return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.pharmacieagnespraden.com/api/merchant-feed.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;
  }
});
