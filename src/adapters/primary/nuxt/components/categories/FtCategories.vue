<template lang="pug">
  // Container principal avec position relative pour le mega menu
  div(class="relative")
    // Barre de catégories principale avec scrolling horizontal
    div(
      class="py-4 px-2 flex items-center gap-4 overflow-x-scroll custom-scrollbar"
      ref="categoryBar"
    )
      template(v-if="!categoriesLoaded")
        div(v-for="n in 12" :key="n" class="bg-gray-200 rounded-xl px-6 w-24 h-10 animate-pulse")
      template(v-else)
        // Boutons pour chaque catégorie principale
        div(
          v-for='category in sortedCategories' 
          :key="category.uuid" 
          class="relative group"
          @mouseenter="isMobile ? null : startIntentTimer(category)"
          @mouseleave="isMobile ? null : cancelIntentTimer()"
          @click="handleCategoryClick(category)"
        )
          ft-button-animate(
            class="bg-white rounded-xl px-6 transition-all"
            :class="{'shadow-md border-b-2 border-main text-main': hoveredCategory && hoveredCategory.uuid === category.uuid}"
          )
            img(class="icon-md" :src="category.icon")
            span(class="whitespace-nowrap") {{ category.name }}
        
        // Bouton Promotions
        ft-button-animate(
          @click="goToPromo()"
          class="bg-white rounded-xl px-6"
        )
          img(class="icon-md" src="https://i.postimg.cc/HkthTcR1/promo.png")
          span(class="whitespace-nowrap") Promotions
    
    // Mega menu pour les sous-catégories (conditionnel)
    transition(
      name="mega-menu"
      enter-active-class="transition ease-out duration-150"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    )
      div(
        v-if="showMegaMenu && hoveredCategory"
        @mouseenter="isMobile ? null : keepMegaMenuOpen"
        @mouseleave="isMobile ? null : hideCategoryMenu"
        class="absolute left-0 right-0 bg-white shadow-md z-50 border-t border-gray-100 mt-2"
      )
        div(class="max-w-7xl mx-auto py-6 px-8")
          // Titre avec bouton vers catégorie principale pour mobile
          div(class="flex justify-between items-center mb-4 border-b border-gray-100 pb-3")
            // Titre de la catégorie
            h3(class="text-xl font-semibold text-main") {{ hoveredCategory ? hoveredCategory.name : '' }}
            
            // Conteneur des boutons
            div(class="flex items-center gap-2")
              // Bouton pour aller à la catégorie principale
              button(
                @click="navigateToCategory(hoveredCategory.uuid, hoveredCategory.name)"
                class="text-white bg-main px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
              )
                span Voir toute la catégorie
                icon(name="ph:arrow-right-bold" class="w-4 h-4")
              
              // Bouton pour fermer le menu (toujours visible)
              button(
                @click="closeMegaMenu"
                class="text-gray-500 hover:text-main transition-colors p-2 rounded-lg hover:bg-gray-50"
                aria-label="Fermer"
                title="Fermer le menu"
              )
                icon(name="ph:x-bold" class="w-5 h-5")
          
          // Message spécial si pas de sous-catégories
          div(v-if="!childCategories.items || childCategories.items.length === 0" class="py-4 text-center")
            p(class="text-gray-500 mb-3") Cette catégorie ne contient pas de sous-catégories.
            button(
              @click="navigateToCategory(hoveredCategory.uuid, hoveredCategory.name)"
              class="text-white bg-main px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 mx-auto transition-colors hover:bg-opacity-90"
            )
              span Accéder à la catégorie
              icon(name="ph:arrow-right-bold" class="w-4 h-4")
          
          // Grille de sous-catégories si disponibles
          div(
            v-else
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          )
            // Pour chaque sous-catégorie
            div(
              v-for="subCat in childCategories.items"
              :key="subCat.uuid"
              class="group"
            )
              // En-tête de sous-catégorie cliquable
              div(
                @click="navigateToCategory(subCat.uuid, subCat.name)"
                class="flex items-center gap-3 mb-3 cursor-pointer hover:text-main transition-colors"
              )
                div(class="bg-gray-50 rounded-full p-2 flex items-center justify-center")
                  img(
                    v-if="subCat.icon" 
                    :src="subCat.icon" 
                    :alt="subCat.name"
                    class="w-8 h-8 object-contain"
                  )
                h4(class="font-medium text-gray-800 group-hover:text-main") {{ subCat.name }}
              
              // Liste des sous-sous-catégories (si disponibles)
              div(
                v-if="getChildSubCategories(subCat.uuid).length > 0"
                class="ml-12 border-l border-gray-100 pl-3"
              )
                div(
                  v-for="childSubCat in getChildSubCategories(subCat.uuid)"
                  :key="childSubCat.uuid"
                  @click="navigateToCategory(childSubCat.uuid, childSubCat.name)"
                  class="py-1 text-sm text-gray-600 hover:text-main cursor-pointer transition-colors flex items-center gap-2"
                )
                  span(class="w-1.5 h-1.5 rounded-full bg-gray-300")
                  span {{ childSubCat.name }}
              
              // Message si pas de sous-sous-catégories et que c'est attendu
              div(
                v-else-if="loadingSubSubCategories[subCat.uuid]"
                class="ml-12 pl-3 py-1 text-xs text-gray-400"
              ) Chargement...
  </template>
  
  <script lang="ts" setup>
  import { ref, computed, onMounted, onBeforeUnmount, reactive } from 'vue';
  import { getChildCategoriesVM } from '../../../viewModels/get-category/getChildCategoryVM.js';
    
  const props = defineProps<{
    categoriesVM: any;
  }>();
  
  definePageMeta({ layout: 'main' });
  
  const router = useRouter();
  
  // État pour le mega menu
  const showMegaMenu = ref(false);
  const hoveredCategory = ref(null);
  const childCategories = ref<ChildCategoriesVM>({ items: [], name: '' });
  const categoryBar = ref(null);
  const intentTimer = ref(null); // Timer pour l'intention de l'utilisateur
  const closeTimer = ref(null);
  const isMobile = ref(false);
  const menuLoaded = ref(false);
  const intentTimerStartTime = ref(0); // Heure de début du timer d'intention
  const INTENTION_DELAY = 1000; // Délai d'intention de 1 seconde
  
  // Stockage des sous-sous-catégories pour chaque sous-catégorie
  const subSubCategories = reactive({});
  const loadingSubSubCategories = reactive({});
  
  // Ordre préféré des catégories
  const desiredOrder = [
    'Médicament',
    'Dermocosmétique',
    'Bien être',
    'Bébé',
    'Nature',
    'Premiers soins',
    'Vétérinaire',
    'Orthopédie',
    'Divers',
  ];
  
  // Catégories triées selon l'ordre souhaité
  const sortedCategories = computed(() => {
    return props.categoriesVM.items
      .filter((category) => category.name !== 'Promotions') // Exclure "Promotions"
      .sort((a, b) => {
        return desiredOrder.indexOf(a.name) - desiredOrder.indexOf(b.name);
      });
  });
  
  // Vérifier si les catégories sont chargées
  const categoriesLoaded = computed(() => {
    return props.categoriesVM?.items?.length > 0;
  });
  
  // Formater l'URL pour le référencement et la lisibilité
  const formatUrl = (basePath, name, uuid) => {
    const formattedName = name
      .toLowerCase()
      .normalize('NFD')  // Décompose les accents
      .replace(/[\u0300-\u036f]/g, '')  // Supprime les accents
      .replace(/[^a-z0-9]+/g, '-')  // Remplace les caractères non alphanumériques par des tirets
      .replace(/^-|-$/g, '');  // Supprime les tirets au début ou à la fin
    
    return `${basePath}/${formattedName}?${uuid}`;
  };
  
  // Méthode de navigation directe et cohérente pour toutes les catégories
  const navigateToCategory = (uuid, name) => {
    // Fermer le mega menu
    showMegaMenu.value = false;
    
    // Formate le nom pour créer une URL "friendly"
    const formattedName = name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  
    // Construire l'URL avec le nom formaté et l'UUID
    const formattedPath = `/categories/${formattedName}?${uuid}`;
    
    // Navigation avec petit délai pour permettre la fermeture du menu
    setTimeout(() => {
      router.push(formattedPath);
    }, 50);
  };
  
  // Gestion du clic sur une catégorie principale
  const handleCategoryClick = (category) => {
    // Annuler tout timer d'intention en cours
    cancelIntentTimer();
    
    if (isMobile.value) {
      // Sur mobile, vérifier d'abord si cette catégorie a déjà été chargée
      if (hoveredCategory.value && hoveredCategory.value.uuid === category.uuid && showMegaMenu.value) {
        // Si le menu est déjà ouvert pour cette catégorie, le fermer
        closeMegaMenu();
      } else {
        // Charger les sous-catégories et vérifier si elles existent
        loadCategoryMenu(category).then(hasChildren => {
          if (!hasChildren && !menuLoaded.value) {
            // Si pas de sous-catégories et le menu n'est pas encore chargé, rediriger directement
            navigateToCategory(category.uuid, category.name);
          } else {
            // Sinon, afficher le menu (qui montrera soit les sous-catégories, soit un message)
            showMegaMenu.value = true;
          }
        });
      }
    } else {
      // Sur desktop, le clic redirige directement
      navigateToCategory(category.uuid, category.name);
    }
  };
  
  // Démarrer le timer d'intention quand la souris entre sur une catégorie
  const startIntentTimer = (category) => {
    // Annuler tout timer existant
    cancelIntentTimer();
    
    // Enregistrer l'heure de début
    intentTimerStartTime.value = Date.now();
    
    // Créer un nouveau timer qui vérifiera régulièrement si le délai est écoulé
    intentTimer.value = setInterval(() => {
      const timeElapsed = Date.now() - intentTimerStartTime.value;
      
      // Si le délai d'intention est atteint, ouvrir le menu
      if (timeElapsed >= INTENTION_DELAY) {
        // Arrêter le timer
        cancelIntentTimer();
        
        // Charger et ouvrir le menu
        loadCategoryMenu(category).then(() => {
          showMegaMenu.value = true;
        });
      }
    }, 100); // Vérifier toutes les 100ms pour une réponse fluide
  };
  
  // Annuler le timer d'intention
  const cancelIntentTimer = () => {
    if (intentTimer.value) {
      clearInterval(intentTimer.value);
      intentTimer.value = null;
    }
    intentTimerStartTime.value = 0;
  };
  
  // Fonction pour charger le menu d'une catégorie
  const loadCategoryMenu = async (category) => {
    menuLoaded.value = false;
    hoveredCategory.value = category;
    
    try {
      // Récupérer les sous-catégories
      childCategories.value = getChildCategoriesVM(category.uuid);
      menuLoaded.value = true;
      
      // Pré-charger les sous-sous-catégories pour chaque sous-catégorie
      if (childCategories.value.items && childCategories.value.items.length > 0) {
        childCategories.value.items.forEach(subCat => {
          getChildSubCategories(subCat.uuid);
        });
        return true; // A des sous-catégories
      } else {
        return false; // N'a pas de sous-catégories
      }
    } catch (error) {
      console.error("Erreur lors du chargement des sous-catégories:", error);
      childCategories.value = { items: [], name: '' };
      menuLoaded.value = true;
      return false; // Considérer qu'il n'y a pas de sous-catégories en cas d'erreur
    }
  };
  
  // Récupérer les sous-sous-catégories pour une sous-catégorie donnée
  const getChildSubCategories = (subCategoryUuid) => {
    if (!subSubCategories[subCategoryUuid] && !loadingSubSubCategories[subCategoryUuid]) {
      // Marquer comme en cours de chargement
      loadingSubSubCategories[subCategoryUuid] = true;
      
      // Charger les sous-sous-catégories de manière asynchrone
      try {
        // Utiliser la même fonction pour récupérer les enfants des sous-catégories
        const childSubCats = getChildCategoriesVM(subCategoryUuid);
        
        // Stocker les résultats
        subSubCategories[subCategoryUuid] = childSubCats.items || [];
        
      } catch (error) {
        console.error(`Erreur lors du chargement des sous-sous-catégories pour ${subCategoryUuid}:`, error);
        subSubCategories[subCategoryUuid] = [];
      } finally {
        loadingSubSubCategories[subCategoryUuid] = false;
      }
    }
    
    // Retourner les sous-sous-catégories
    return subSubCategories[subCategoryUuid] || [];
  };
  
  // Maintenir le menu ouvert quand on survole le mega menu
  const keepMegaMenuOpen = () => {
    // Annuler tout timer d'intention en cours
    cancelIntentTimer();
    
    // Annuler tout timer de fermeture en cours
    if (closeTimer.value) {
      clearTimeout(closeTimer.value);
      closeTimer.value = null;
    }
  };
  
  // Cacher le menu avec un délai
  const hideCategoryMenu = () => {
    // Annuler tout timer d'intention en cours
    cancelIntentTimer();
    
    // Fermer avec un court délai pour permettre de passer au menu
    closeTimer.value = setTimeout(() => {
      showMegaMenu.value = false;
    }, 150);
  };
  
  // Fermer le menu immédiatement (pour le bouton de fermeture)
  const closeMegaMenu = () => {
    // Annuler tout timer d'intention en cours
    cancelIntentTimer();
    
    // Annuler tout timer de fermeture en cours
    if (closeTimer.value) {
      clearTimeout(closeTimer.value);
      closeTimer.value = null;
    }
    
    // Fermer immédiatement le menu
    showMegaMenu.value = false;
  };
  
  // Aller à la page promotions
  const goToPromo = () => {
    router.push('/promotions');
  };
  
  // Détection du mobile et configuration des événements
  onMounted(() => {
    // Détecter si l'appareil est mobile
    const checkMobile = () => {
      isMobile.value = window.innerWidth < 768;
    };
    
    // Vérifier au chargement
    checkMobile();
    
    // Vérifier lors du redimensionnement
    window.addEventListener('resize', checkMobile);
    
    // Configuration des événements clavier
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && showMegaMenu.value) {
        closeMegaMenu();
      }
    });
  });
  
  // Nettoyer les timers et écouteurs d'événements à la destruction du composant
  onBeforeUnmount(() => {
    cancelIntentTimer();
    
    if (closeTimer.value) {
      clearTimeout(closeTimer.value);
      closeTimer.value = null;
    }
    
    // Supprimer l'écouteur de redimensionnement
    window.removeEventListener('resize', checkMobile);
    
    // Supprimer les autres écouteurs d'événements
    document.removeEventListener('keydown', (e) => {
      if (e.key === 'Escape' && showMegaMenu.value) {
        closeMegaMenu();
      }
    });
  });
  </script>
  
  <style scoped>
  .custom-scrollbar {
    overflow-y: hidden;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
  
  .custom-scrollbar::-webkit-scrollbar {
    height: 6px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #e5017d;
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background-color: #e0e0e0;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #ff008c;
  }
  
  .custom-scrollbar {
    scrollbar-gutter: stable both-edges;
  }
  </style>