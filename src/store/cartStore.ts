import { defineStore } from 'pinia';
import { UUID } from '@core/types/types';
import { ProductIsNotInCartError } from '@core/errors/ProductIsNotInCartError';

export const useCartStore = defineStore('cartStore', {
  state: () => {
    // Initialiser avec les données du localStorage si disponibles
    const savedCart = process.client ? localStorage.getItem('persistent_cart') : null;
    const savedTimestamp = process.client ? localStorage.getItem('persistent_cart_timestamp') : null;
    
    let initialItems: Array<UUID> = [];
    
    // Vérifier si le panier sauvegardé est valide et n'a pas expiré (24h)
    if (savedCart && savedTimestamp) {
      try {
        const parsedCart = JSON.parse(savedCart);
        const timestamp = parseInt(savedTimestamp);
        const now = Date.now();
        const diff = now - timestamp;
        const hours = diff / (1000 * 60 * 60);
        
        // Si le panier n'a pas expiré (moins de 24h)
        if (hours < 24) {
          initialItems = parsedCart;
          console.log('[CartStore] Panier restauré depuis localStorage, âge:', Math.round(hours), 'heures');
        } else {
          console.log('[CartStore] Panier expiré (> 24h), utilisation d\'un panier vide');
          if (process.client) {
            localStorage.removeItem('persistent_cart');
            localStorage.removeItem('persistent_cart_timestamp');
          }
        }
      } catch (e) {
        console.error('[CartStore] Erreur lors du parsing du panier sauvegardé:', e);
      }
    }
    
    return {
      items: initialItems,
    };
  },
  
  actions: {
    add(productUuid: UUID) {
      this.items.push(productUuid);
      this._saveToLocalStorage();
    },

    remove(productUuid: UUID) {
      const index = this.items.lastIndexOf(productUuid);
      if (index === -1) throw new ProductIsNotInCartError(productUuid);
      this.items.splice(index, 1);
      this._saveToLocalStorage();
    },

    removeAll() {
      this.items = [];
      this._saveToLocalStorage();
    },

    removeAllItemByUuid(productUuid: UUID) {
      if (this.items.indexOf(productUuid) === -1) throw new ProductIsNotInCartError(productUuid);
      this.items = this.items.filter((uuid: UUID) => uuid !== productUuid);
      this._saveToLocalStorage();
    },

    restoreCart(savedItems: Array<UUID>) {
      this.items = savedItems;
      this._saveToLocalStorage();
    },
    
    // Méthode privée pour sauvegarder dans localStorage
    _saveToLocalStorage() {
      if (process.client) {
        try {
          localStorage.setItem('persistent_cart', JSON.stringify(this.items));
          localStorage.setItem('persistent_cart_timestamp', Date.now().toString());
          console.log('[CartStore] Panier sauvegardé dans localStorage:', this.items.length, 'articles');
        } catch (e) {
          console.error('[CartStore] Erreur lors de la sauvegarde du panier:', e);
        }
      }
    },
    
    // Restaurer le panier depuis localStorage (utile après une reconnexion)
    loadFromLocalStorage() {
      if (process.client) {
        const savedCart = localStorage.getItem('persistent_cart');
        const savedTimestamp = localStorage.getItem('persistent_cart_timestamp');
        
        if (savedCart && savedTimestamp) {
          try {
            const parsedCart = JSON.parse(savedCart);
            const timestamp = parseInt(savedTimestamp);
            const now = Date.now();
            const diff = now - timestamp;
            const hours = diff / (1000 * 60 * 60);
            
            // Si le panier n'a pas expiré (moins de 24h)
            if (hours < 24) {
              this.items = parsedCart;
              console.log('[CartStore] Panier restauré depuis localStorage, âge:', Math.round(hours), 'heures');
              return true;
            } else {
              console.log('[CartStore] Panier expiré (> 24h), utilisation d\'un panier vide');
              localStorage.removeItem('persistent_cart');
              localStorage.removeItem('persistent_cart_timestamp');
            }
          } catch (e) {
            console.error('[CartStore] Erreur lors du parsing du panier sauvegardé:', e);
          }
        }
      }
      return false;
    }
  },
});
