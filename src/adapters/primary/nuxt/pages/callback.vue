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
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };
  
  onMounted(() => {
    console.log('[Callback] Page de callback chargée');
    
    // Récupérer l'URL sauvegardée et les paramètres de recherche
    const redirectUrl = localStorage.getItem('redirectAfterLogin');
    const searchParams = localStorage.getItem('searchParams');
    
    console.log('[Callback] URL sauvegardée:', redirectUrl);
    console.log('[Callback] Paramètres de recherche:', searchParams);
    
    // Marquer que nous venons juste de nous authentifier
    localStorage.setItem('justAuthenticated', 'true');
    
    // Redirection spéciale pour la page de recherche sur mobile
    if (redirectUrl && redirectUrl.includes('/search') && searchParams && isMobile()) {
      const baseUrl = window.location.origin + '/search';
      const finalUrl = baseUrl + '?' + searchParams;
      console.log('[Callback] Redirection mobile vers:', finalUrl);
      
      // Léger délai pour éviter les redirections trop rapides
      setTimeout(() => {
        window.location.href = finalUrl;
      }, 300);
    } else if (redirectUrl) {
      // Redirection standard
      console.log('[Callback] Redirection standard vers:', redirectUrl);
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 300);
    } else {
      // Aucune URL sauvegardée, retour à l'accueil
      console.log('[Callback] Aucune URL de redirection, retour à l\'accueil');
      setTimeout(() => {
        window.location.href = '/';
      }, 300);
    }
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