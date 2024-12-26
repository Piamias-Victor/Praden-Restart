import { User } from '@core/types/type';
import { useUserStore } from '@store/userStore';
import axios from 'axios';
import { useNuxtApp } from 'nuxt/app';

// Fonction pour convertir un objet `User` au format attendu par `editProfileSchema`
const mapUserToEditProfileSchema = (user: User) => {
  const formattedUser: any = {};

  // Champs optionnels pour le profil
  if (user.email) formattedUser.email = user.email;
  if (user.firstname) formattedUser.firstname = user.firstname;
  if (user.lastname) formattedUser.lastname = user.lastname;
  if (user.phoneNumber) formattedUser.phone = user.phoneNumber;

  // Champ optionnel pour l'adresse
  if (user.address) {
    formattedUser.address = {
      firstname: user.firstname,
      lastname: user.lastname,
      address: user.address.address,
      city: user.address.city,
      zip: user.address.zip,
      country: user.address.country,
      appartement: user.address.appartement,
    };
  }

  return formattedUser;
};

export const updateUser = async (user: User) => {
  const userStore = useUserStore();
  const { $keycloak }: any = useNuxtApp(); // Récupérer Keycloak injecté dans Nuxt
  userStore.update(user);

  // Préparer le corps de la requête pour l'API
  const requestBody = mapUserToEditProfileSchema(user);

  try {
    // Vérifier et rafraîchir le token si nécessaire
    if ($keycloak) {
      try {
        const refreshed = await $keycloak.updateToken(30); // Rafraîchit si le token expire dans les 30 secondes
        if (refreshed) {
        }
      } catch (error) {
        console.error('Échec du rafraîchissement du token Keycloak', error);
        throw new Error('Impossible de rafraîchir le token Keycloak.');
      }
    }

    const token = $keycloak.token;

    if (!token) {
      throw new Error("Token Keycloak non disponible pour l'authentification.");
    }

    const response = await axios.patch(
      'https://ecommerce-backend-production.admin-a5f.workers.dev/profile',
      requestBody, // Corps formaté avec uniquement les données nécessaires
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    // Mettre à jour le store utilisateur avec les nouvelles informations
  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil utilisateur :', error);
    throw error;
  }
};

export const recoverUser = (user: any) => {
  const userStore = useUserStore();
  userStore.update(user);
};
