// server/api/redirect-product.ts
import { defineEventHandler, getQuery, sendRedirect } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const uuid = query.uuid as string;
  
  if (!uuid || typeof uuid !== 'string') {
    return sendRedirect(event, '/', 302);
  }

  try {
    // Récupère directement les informations du produit via l'API
    const response = await axios.get(`https://ecommerce-backend-production.admin-a5f.workers.dev/products/${uuid}`);
    const product = response.data.item;
    
    if (!product || !product.name) {
      return sendRedirect(event, '/', 302);
    }
    
    // Fonction pour formater le nom du produit en slug SEO-friendly
    const formatProductSlug = (name) => {
      if (!name) return '';
      return name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
        .replace(/[^a-z0-9]+/g, '-')     // Remplace les caractères spéciaux par des tirets
        .replace(/^-|-$/g, '');          // Retire les tirets en début/fin
    };
    
    // Génère la nouvelle URL avec le slug du produit
    const formattedName = formatProductSlug(product.name);
    const newUrl = `/products/${formattedName}?${uuid}`;
    
    // Effectue la redirection 301
    return sendRedirect(event, newUrl, 301);
  } catch (error) {
    console.error('Erreur lors de la redirection du produit:', error);
    return sendRedirect(event, '/', 302);
  }
});