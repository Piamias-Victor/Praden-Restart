/**
 * Utilitaires pour la création d'URLs de recherche partageables
 */

/**
 * Crée une URL de recherche partageable
 * @param query Terme de recherche
 * @param baseUrl URL de base du site (par défaut: pharmacieagnespraden.com)
 * @returns URL complète pour la recherche
 */
export const createSearchUrl = (query: string, baseUrl = 'https://pharmacieagnespraden.com') => {
    return `${baseUrl}/search?q=${encodeURIComponent(query)}`;
  };
  
  /**
   * Crée une URL de recherche avec paramètres UTM pour le suivi marketing
   * @param query Terme de recherche
   * @param source Source de la campagne (ex: facebook, instagram)
   * @param medium Support de la campagne (ex: social, email)
   * @param campaign Nom de la campagne
   * @param baseUrl URL de base du site (par défaut: pharmacieagnespraden.com)
   * @returns URL complète pour la recherche avec paramètres UTM
   */
  export const createMarketingSearchUrl = (
    query: string, 
    source: string,
    medium: string,
    campaign: string,
    baseUrl = 'https://pharmacieagnespraden.com'
  ) => {
    return `${baseUrl}/search?q=${encodeURIComponent(query)}&utm_source=${encodeURIComponent(source)}&utm_medium=${encodeURIComponent(medium)}&utm_campaign=${encodeURIComponent(campaign)}`;
  };
  
  /**
   * Crée des liens pour des termes de recherche populaires prédéfinis
   * Utile pour les widgets de suggestions de recherche
   * @param baseUrl URL de base du site (par défaut: pharmacieagnespraden.com)
   * @returns Objet contenant des liens populaires prédéfinis
   */
  export const getPopularSearchLinks = (baseUrl = 'https://pharmacieagnespraden.com') => {
    const popularQueries = [
      'solaire',
      'protection solaire',
      'anti-cellulite',
      'bébé',
      'dermatologie',
      'hydratant',
      'vitamines',
      'maquillage',
      'cheveux',
      'amincissement'
    ];
    
    return popularQueries.reduce((acc, query) => {
      acc[query] = createSearchUrl(query, baseUrl);
      return acc;
    }, {} as Record<string, string>);
  };
  
  /**
   * Exemples d'utilisation pour les campagnes marketing
   */
  export const exampleMarketingLinks = {
    facebook: {
      solairePrintemps: createMarketingSearchUrl('protection solaire', 'facebook', 'social', 'promo-solaire-printemps'),
      bebePromo: createMarketingSearchUrl('bébé', 'facebook', 'social', 'offres-bebe-mai'),
    },
    instagram: {
      makeup: createMarketingSearchUrl('maquillage', 'instagram', 'social', 'tendances-makeup'),
      skincare: createMarketingSearchUrl('soin peau', 'instagram', 'social', 'routine-skincare'),
    },
    email: {
      newsletter: createMarketingSearchUrl('nouveautés', 'email', 'newsletter', 'nouveautes-mensuel'),
      promo: createMarketingSearchUrl('promotion', 'email', 'promotion', 'promo-weekend'),
    }
  };