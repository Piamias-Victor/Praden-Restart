<template lang="pug">
  nav.flex.items-center.justify-center.p-2.px-9
      div.flex.gap-2
          ft-button-animate.bg-white.rounded-full(@click="openProfil")
              icon.icon-md.text-main(name="material-symbols:supervised-user-circle-outline")
              span.text-main.font-semibold.hidden(class='sm:block') Mon Profil
      div.flex.items-center.justify-center.gap-1.grow.px-2
          nuxt-link(
              href="/"
              @click="clicked"
              )
            img.block(
                    class='h-[40px] sm:h-[60px]'
                    src="https://i.postimg.cc/FsS7CdM5/p-removebg-preview.png"
                    alt="logo"
                    )
      div.flex.items-center.justify-end.gap-4
          ft-button-animate.bg-white.rounded-full(@click="openCart")
              span.text-main.font-semibold.hidden(class='sm:block') Panier
              span.text-main.font-semibold(v-if="cartQuantity && cartQuantity.totalQuantity") {{ cartQuantity.totalQuantity }}
              icon.icon-md.text-main(:name="cartQuantity && cartQuantity.totalQuantity ? 'akar-icons:shopping-bag' : 'akar-icons:shopping-bag'")
          ft-button-animate.bg-white.rounded-full(@click="startSearch")
              span.text-main.font-semibold.hidden(class='sm:block') Recherche
              icon.icon-md.text-main(name="lucide:search")
  
  ft-profil(v-if="profilOpened" @close="closeProfil")
  ft-search(v-if="searchOpened" @close="closeSearch")
  ft-cart-panel(v-if="cartOpened && user.uuid" @close="closeCart")
  ft-profil(v-if="cartOpened && !user.uuid" @close="closeProfil")
  
  // Nouveau modal spécifique pour la recherche mobile
  search-modal(v-if="searchModalOpen" @close="closeSearchModal" @search="handleSearch")
</template>
  
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue';
import { useRouter } from 'nuxt/app';
import { getRootCategoriesVM } from '@adapters/primary/viewModels/get-category/getRootCategoriesVM';
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm';
import { useProductGateway } from '../../../../../../gateways/productGateway';
import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM';
import SearchModal from './SearchModal.vue'; // Assurez-vous de créer ce composant
  
const profilOpened = ref(false);
const searchOpened = ref(false);
const cartOpened = ref(false);
const searchModalOpen = ref(false); // État pour le nouveau modal de recherche
  
const categoriesVM = computed(() => {
  return getRootCategoriesVM();
});
  
const cartQuantity = ref<{ totalQuantity: number } | null>(null);
const router = useRouter();
  
const openProfil = () => {
  profilOpened.value = true;
};
  
const closeProfil = () => {
  profilOpened.value = false;
  cartOpened.value = false;
};

// Fonction pour vérifier si on est sur mobile
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Modification ici: utilisation du modal de recherche sur mobile
const startSearch = () => {
  // Vérifier si l'utilisateur est déjà sur la page de recherche
  const isSearchPage = window.location.pathname === '/search';
  
  if (isSearchPage) {
    // Sur mobile, ouvrir le modal dédié
    if (isMobile()) {
      searchModalOpen.value = true;
    } else {
      // Sur desktop, scroll vers le haut et focus sur l'input
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        const searchInputElement = document.getElementById('search');
        if (searchInputElement) {
          searchInputElement.focus();
        }
      }, 300);
    }
  } else {
    // Redirection vers la page de recherche
    router.push('/search');
  }
};

// Gérer la recherche depuis le modal
const handleSearch = (searchText) => {
  // Redirection vers la page de recherche avec la requête
  if (window.location.pathname !== '/search') {
    router.push('/search');
  }
  
  // Attendre que la page soit chargée avant d'appliquer la recherche
  setTimeout(() => {
    const searchInputElement = document.getElementById('search');
    if (searchInputElement) {
      // Mettre la valeur et déclencher l'événement input
      searchInputElement.value = searchText;
      searchInputElement.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }, 500);
  
  // Fermer le modal
  closeSearchModal();
};
  
const closeSearchModal = () => {
  searchModalOpen.value = false;
};
  
const closeSearch = () => {
  searchOpened.value = false;
};
  
const openCart = () => {
  cartOpened.value = true;
};
  
const closeCart = () => {
  cartOpened.value = false;
};

const clicked = () => {
  // Fonction vide pour l'événement click sur le logo
};
  
const user = computed(() => {
  return getUserVM();
});
  
// Mise à jour automatique du panier
watchEffect(async () => {
  cartQuantity.value = await getCartQuantityVM(useProductGateway());
});
</script>