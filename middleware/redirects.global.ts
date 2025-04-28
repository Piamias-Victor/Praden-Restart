// middleware/redirects.global.ts
import { defineNuxtRouteMiddleware, navigateTo } from '#imports';

export default defineNuxtRouteMiddleware((to) => {
  // Vérifie si l'URL correspond au format UUID direct
  // Format: /products/9040aa54-14f6-4f69-94f6-59844211f5a7
  if (to.path.startsWith('/products/') && 
      /^\/products\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(to.path)) {
    
    // Extraction de l'UUID
    const uuid = to.path.split('/')[2];
    
    // Redirection vers le point d'API qui s'occupera de rediriger vers la bonne URL
    return navigateTo(`/api/redirect-product?uuid=${uuid}`, { 
      redirectCode: 301
    });
  }
});