// src/utils/getToken.ts
export const getToken = async (): Promise<string | null> => {
    const { keycloak, keycloakReady } = nuxtApp.$keycloak, nuxtApp.$keycloakReady
  
    try {
      await keycloakReady
      if (!keycloak.authenticated) {
        console.warn('Utilisateur non authentifié. Déclenchement de la connexion...')
        await keycloak.login()
        return null
      }
      if (keycloak.isTokenExpired()) {
        await keycloak.updateToken(30)
      }
      return keycloak.token || null
    } catch (error: any) {
      console.error('Échec du rafraîchissement du token :', error)
      return null
    }
  }
  