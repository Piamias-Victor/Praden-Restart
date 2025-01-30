import '@nuxt/schema';

declare module '@nuxt/schema' {
  interface NuxtConfig {
    sitemap?: {
      hostname: string; // URL de base du site
      gzip?: boolean; // Compression du fichier sitemap
      routes?: (() => Promise<(string | SitemapRoute)[]>) | (string | SitemapRoute)[]; // Routes statiques ou dynamiques
    };
  }
  
  interface NuxtOptions {
    sitemap?: {
      hostname: string;
      gzip?: boolean;
      routes?: (() => Promise<(string | SitemapRoute)[]>) | (string | SitemapRoute)[]; // Routes statiques ou dynamiques
    };
  }
}

/**
 * Définition d'une route pour le sitemap.
 */
interface SitemapRoute {
  url: string; // URL de la page
  lastmod?: string; // Date de dernière modification (format ISO)
  changefreq?: 'daily' | 'weekly' | 'monthly' | 'yearly'; // Fréquence de mise à jour
  priority?: number; // Priorité de la page (0.0 à 1.0)
}