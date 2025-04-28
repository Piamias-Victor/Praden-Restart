import { defineNuxtPlugin } from '#app';
import { initDataLayer } from '@utils/dataLayer';

export default defineNuxtPlugin(() => {
  // Initialisation du dataLayer uniquement côté client
  initDataLayer();
  
  // Injection GTM si nécessaire (alternative à l'ajout dans nuxt.config)
  if (typeof window !== 'undefined' && !window.dataLayer) {
    const GTM_ID = 'GTM-K9S5LG3'; // Remplacer avec votre ID GTM
    
    // Initialiser l'array dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // Ajouter le script GTM
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');
    `;
    document.head.appendChild(script);
    
    // Ajouter le iframe noscript (optionnel)
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
  }
});