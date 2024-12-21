<template>
  <div class="text-center mt-6">
    <!-- Afficher le bouton de connexion si l'utilisateur n'est pas authentifié -->
    <template v-if="!isAuthenticated">
      <button class="btn btn-primary" @click="login">Connexion</button>
    </template>

    <!-- Afficher un message si l'utilisateur est connecté -->
    <template v-else>
      <p>Vous êtes connecté en tant que {{ user.firstName || 'Utilisateur' }}</p>
      <button class="btn btn-secondary" @click="logout">Déconnexion</button>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

// Références réactives pour l'état d'authentification et les informations utilisateur
const isAuthenticated = ref(false);
const user = ref<{ firstName?: string }>({});

// Récupération de Keycloak via le plugin Nuxt
const nuxtApp = useNuxtApp();
const keycloak = nuxtApp.$keycloak;
const keycloakReady = nuxtApp.$keycloakReady;

// Vérifier si Keycloak est prêt et gérer l'état d'authentification
onMounted(() => {
  if (keycloakReady) {
    keycloakReady
      .then(() => {
        isAuthenticated.value = keycloak.authenticated;
        if (isAuthenticated.value) {
          user.value = {
            firstName: keycloak.tokenParsed?.given_name || '',
          };
        }
      })
      .catch((error) => {
        console.error("Erreur lors de l'initialisation de Keycloak :", error);
      });
  } else {
    console.error('$keycloakReady est indéfini');
  }
});

// Fonction pour gérer la connexion
const login = () => {
  if (keycloak) {
    keycloak.login().catch((error) => {
      console.error('Erreur lors de la tentative de connexion :', error);
    });
  } else {
    console.error("Keycloak n'est pas initialisé");
  }
};

// Fonction pour gérer la déconnexion
const logout = () => {
  if (keycloak) {
    keycloak.logout({ redirectUri: window.location.origin }).catch((error) => {
      console.error('Erreur lors de la tentative de déconnexion :', error);
    });
  } else {
    console.error("Keycloak n'est pas initialisé");
  }
};
</script>

<style scoped>
/* Styles de base pour les boutons */
.btn {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}
</style>
