import { LaboratoryGateway } from '@core/gateways/laboratoryGateway';
import { SearchGateway } from '@core/gateways/searchGateway';
import { useCategoryStore } from '@store/categoryStore';
import { useLaboratoryStore } from '@store/laboratoryStore';
import { useSearchStore } from '@store/searchStore';
import { UUID } from 'crypto';


export const getLaboratory = async (uuid: UUID, laboratoryGateway: LaboratoryGateway, searchGateway: SearchGateway) => {
  const laboratoryStore = useLaboratoryStore();
  const productsWithFacets = await searchGateway.searchProduct(undefined, [uuid]);
  const facets = await searchGateway.searchFacet(undefined, [uuid]);
  const searchStore = useSearchStore();
  searchStore.setSearchResult(productsWithFacets);
  searchStore.setFacets(facets);
};

export const getLaboratoryByName = async (labo: Array<string>, query: string, searchGateway: SearchGateway) => {
  const laboratoryStore = useLaboratoryStore();

  // Récupérer les UUID des laboratoires dans le tableau 'labo'
  const laboratoryUUIDs = labo
    .map((labName) => {
      const res = laboratoryStore.getByName(labName); // Obtenez le laboratoire par son nom
      return res ? res.uuid : null; // Retourne l'UUID ou null si pas trouvé
    })
    .filter((uuid) => uuid !== null); // Filtrer les UUIDs valides

  if (laboratoryUUIDs.length > 0) {
    try {
      // Recherchez tous les produits avec un tableau d'UUIDs
      const productsWithFacets = await searchGateway.searchProduct(query, laboratoryUUIDs);

      // Mettre à jour le store avec les résultats obtenus
      const searchStore = useSearchStore();
      searchStore.setSearchResult(productsWithFacets);
    } catch (error) {
      console.error('Erreur lors de la récupération des produits pour les laboratoires', error);
    }
  } else {
    console.warn('Aucun laboratoire trouvé pour les noms fournis');
  }
};

export const getLaboratoryByNamePromo = async (labo: Array<string>, query: string, searchGateway: SearchGateway) => {
  const laboratoryStore = useLaboratoryStore();

  // Récupérer les UUID des laboratoires dans le tableau 'labo'
  const laboratoryUUIDs = labo
    .map((labName) => {
      const res = laboratoryStore.getByName(labName); // Obtenez le laboratoire par son nom
      return res ? res.uuid : null; // Retourne l'UUID ou null si pas trouvé
    })
    .filter((uuid) => uuid !== null); // Filtrer les UUIDs valides

  if (laboratoryUUIDs.length > 0) {
    try {
      // Recherchez tous les produits avec un tableau d'UUIDs
      const productsWithFacets = await searchGateway.searchProduct(query, laboratoryUUIDs, 400, 'true');

      // Mettre à jour le store avec les résultats obtenus
      const searchStore = useSearchStore();
      searchStore.setSearchResult(productsWithFacets);
    } catch (error) {
      console.error('Erreur lors de la récupération des produits pour les laboratoires', error);
    }
  } else {
    console.warn('Aucun laboratoire trouvé pour les noms fournis');
  }
};
