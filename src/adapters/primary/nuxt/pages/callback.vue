<template>
  <div class="callback-page">
    <div class="loading-spinner">
      <div class="spinner"></div>
      <p>Authentification en cours...</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCartStore } from '@/src/store/cartStore';
import { useNuxtApp } from '#app';

// Fonction pour nettoyer une URL en retirant les fragments d'authentification
const cleanUrl = (url) => {
  if (!url) return url;
  
  // Si l'URL contient un fragment d'authentification (#state=...)
  const hashIndex = url.indexOf('#state=');
  if (hashIndex !== -1) {
    return url.substring(0, hashIndex);
  }
  
  return url;
};

onMounted(() => {
  console.log('[Callback] Page de callback chargée');
  
  // Récupérer les instances nécessaires
  const cartStore = useCartStore();
  const nuxtApp = useNuxtApp();
  
  // Attendre un moment pour s'assurer que tout est chargé
  setTimeout(async () => {
    try {
      console.log('[Callback] Restauration du panier...');
      
      // Récupérer le panier sauvegardé
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart);
          console.log('[Callback] Panier trouvé dans localStorage');
          
          // Si cartStore a une méthode loadFromLocalStorage, l'utiliser
          if (cartStore.loadFromLocalStorage && typeof cartStore.loadFromLocalStorage === 'function') {
            cartStore.loadFromLocalStorage();
          } 
          // Sinon, utiliser restoreCart
          else if (parsedCart) {
            console.log('[Callback] Restauration du panier avec', Object.keys(parsedCart).length, 'articles');
            cartStore.restoreCart(parsedCart);
          }
          
          // Nettoyer le localStorage
          localStorage.removeItem('cart');
        } catch (error) {
          console.error('[Callback] Erreur lors de la restauration du panier:', error);
        }
      } else {
        console.log('[Callback] Aucun panier trouvé dans localStorage');
      }
      
      // Récupérer l'URL sauvegardée et les paramètres de recherche
      const redirectUrl = localStorage.getItem('redirectAfterLogin');
      const searchParams = localStorage.getItem('searchParams');
      
      console.log('[Callback] URL sauvegardée:', redirectUrl);
      console.log('[Callback] Paramètres de recherche:', searchParams);
      
      // Nettoyer l'URL de redirection
      localStorage.removeItem('redirectAfterLogin');
      localStorage.removeItem('searchParams');
      
      // Si nous sommes sur la page de recherche avec une requête
      if (redirectUrl && redirectUrl.includes('/search') && searchParams) {
        // Construire une URL propre sans aucun fragment d'authentification
        const baseUrl = window.location.origin + '/search';
        const finalUrl = baseUrl + '?' + searchParams;
        console.log('[Callback] Redirection vers la page de recherche nettoyée:', finalUrl);
        
        // Stocker la requête directement pour la page de recherche
        const params = new URLSearchParams(searchParams);
        const searchQuery = params.get('q');
        if (searchQuery) {
          localStorage.setItem('pendingSearchQuery', searchQuery);
          console.log('[Callback] Requête de recherche sauvegardée:', searchQuery);
        }
        
        // Rediriger vers la page d'accueil d'abord pour empêcher les redirections cycliques
        // puis laisser la page de recherche se charger correctement
        window.location.replace('/');
        
        // Après un bref délai, rediriger vers la recherche
        setTimeout(() => {
          window.location.replace('/');
        }, 100);
      } else if (redirectUrl) {
        // Redirection standard vers une URL nettoyée
        const cleanRedirectUrl = cleanUrl(redirectUrl);
        console.log('[Callback] Redirection standard vers:', cleanRedirectUrl);
        window.location.replace('/');
      } else {
        // Aucune URL sauvegardée, retour à l'accueil
        console.log('[Callback] Aucune URL de redirection, retour à l\'accueil');
        window.location.replace('/');
      }
    } catch (error) {
      console.error('[Callback] Erreur générale:', error);
      window.location.replace('/');
    }
  }, 500);
});
</script>

<style scoped>
.callback-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(229, 1, 125, 0.3);
  border-radius: 50%;
  border-top-color: #e5017d;
  animation: spin 1s ease-in-out infinite;
}

p {
  font-size: 18px;
  color: #e5017d;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>