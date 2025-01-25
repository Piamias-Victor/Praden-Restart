import { defineSitemapEventHandler } from '#imports';
import type { SitemapUrlInput } from '#sitemap/types';

export default defineSitemapEventHandler(async () => {
  try {
    // Faites un appel à l'API pour récupérer les catégories
    const response = await $fetch('https://ecommerce-backend-production.admin-a5f.workers.dev/categories');
    const categories = response.items;

    if (!categories || categories.length === 0) {
      console.warn('Aucune catégorie trouvée.');
      return [];
    }

    // Transformez les catégories en URLs pour le sitemap
    return categories.map((category: { name: string; uuid: string }) => ({
      loc: `/categories/${category.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')}-${category.uuid}`,
      changefreq: 'weekly',
      priority: 0.8,
    })) satisfies SitemapUrlInput[];
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories :', error);
    return [];
  }
});
