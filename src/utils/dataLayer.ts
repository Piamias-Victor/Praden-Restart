/**
 * Utilitaire pour gérer les événements Google Tag Manager dataLayer
 */

// Type pour fenêtre avec dataLayer
declare global {
    interface Window {
      dataLayer: any[];
    }
  }
  
  // Initialisation du dataLayer
  export const initDataLayer = () => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
    }
  };
  
  // Push générique vers dataLayer
  export const pushToDataLayer = (data: any) => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(data);
      console.log('DataLayer push:', data); // Pour débogage en développement
    }
  };
  
  /**
   * Événement add_to_cart au format attendu par l'agence SEA
   * @param product - Données du produit
   * @param quantity - Quantité ajoutée
   */
  export const trackAddToCart = (product: any, quantity: number) => {
    // Extraction et conversion du prix
    let price = 0;
    if (typeof product.price === 'string') {
      // Si prix est une chaîne comme "29,90 €"
      price = parseFloat(product.price.replace(/[^\d,]/g, '').replace(',', '.'));
    } else if (typeof product.price === 'number') {
      // Si c'est déjà un nombre
      price = product.price;
    }
  
    pushToDataLayer({
      event: 'add_to_cart',
      ecommerce: {
        items: [{
          item_id: product.uuid,
          item_name: product.name,
          currency: "EUR",
          price: price,
          quantity: quantity
        }],
        currency: "EUR"
      }
    });
  };
  
  /**
   * Événement purchase au format attendu par l'agence SEA
   * @param orderData - Données de la commande
   */
  export const trackPurchase = (orderData: any) => {
    if (!orderData || !orderData.uuid) {
      console.warn('Données de commande invalides pour le tracking purchase');
      return;
    }
  
    // Préparation des items de commande
    const items = orderData.lines.map((line: any) => ({
      item_id: line.productUuid,
      item_name: line.name,
      currency: "EUR",
      price: line.unitAmount / 100, // Conversion centimes → euros
      quantity: line.quantity
    }));
  
    // Calcul du montant total
    const totalValue = orderData.lines.reduce((total: number, line: any) => {
      return total + (line.unitAmount / 100 * line.quantity);
    }, 0);
  
    // Envoi de l'événement purchase
    pushToDataLayer({
      event: 'purchase',
      ecommerce: {
        transaction_id: orderData.uuid,
        value: totalValue,
        currency: "EUR",
        items: items
      }
    });
  };