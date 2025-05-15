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
</template>
  
<script lang="ts" setup>
import { getRootCategoriesVM } from '@adapters/primary/viewModels/get-category/getRootCategoriesVM';
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm';
import { useProductGateway } from '../../../../../../gateways/productGateway';
import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM';
  
const profilOpened = ref(false);
const searchOpened = ref(false);
const cartOpened = ref(false);
  
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
  
// Modification ici: rediriger vers la page de recherche au lieu d'ouvrir la modal
const startSearch = () => {
  // Vérifier si l'utilisateur est déjà sur la page de recherche
  const isSearchPage = window.location.pathname === '/search';
  
  if (isSearchPage) {
    // Déjà sur la page de recherche, faire défiler vers le haut
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Après le défilement, attendre un peu puis mettre le focus sur l'input
    setTimeout(() => {
      // Trouver l'élément input de recherche
      const searchInputElement = document.getElementById('search');
      if (searchInputElement) {
        searchInputElement.focus();
        
        // Spécifiquement pour les appareils mobiles
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          // Simuler un clic pour faire apparaître le clavier
          searchInputElement.click();
        }
      }
    }, 300); // Délai suffisant pour le défilement
  } else {
    // Redirection vers la page de recherche
    router.push('/search');
  }
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
  
const user = computed(() => {
  return getUserVM();
});
  
// Mise à jour automatique du panier
watchEffect(async () => {
  cartQuantity.value = await getCartQuantityVM(useProductGateway());
});
</script>