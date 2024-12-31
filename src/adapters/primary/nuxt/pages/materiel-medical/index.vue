<template>
    <section class="materiel-medical px-4 py-8">
      <h1 class="text-4xl font-bold mb-8 text-center text-main">Matériel Médical à Alès</h1>
  
      <!-- Exemples de Matériel Médical -->
      <div class="exemples-materiel mb-8">
        <h2 class="text-2xl font-semibold mb-4">Exemples de Matériel Médical</h2>
        <p class="mb-4">
          Un large choix de matériel médical vous est proposé à la vente ou à la location dans votre pharmacie Agnès Praden d'Alès. Nous vous proposons une large gamme de matériel orthopédique (ceintures lombaires, attelles,…) et de matériel médical (fauteuil roulant, scooters électriques, lit médicalisé, gants chirurgicaux,…). Notre préparateur en pharmacie diplômé saura répondre à vos demandes.
        </p>
        <!-- Exemple d'images de matériel médical -->
      </div>
  
      <!-- Liste des Marques de Matériel Médical -->
      <div class="liste-marques mb-8">
        <h2 class="text-2xl font-semibold mb-4">Liste des Marques de Matériel Médical</h2>
        <p class="mb-4">
          Découvrez un large choix de produits disponibles à l’achat ou à la location pour les particuliers et les professionnels de santé. Perte d’autonomie ou de mobilité ? Nous proposons des équipements médicaux fiables et pratiques pour renforcer la sécurité du patient et le maintien à domicile des personnes âgées.
        </p>
        <!-- Liste des marques (peut être remplacée par des logos de marques) -->
      </div>
  
      <!-- Coordonnées de la Pharmacie -->
      <div class="coordonnees mb-8">
        <h2 class="text-2xl font-semibold mb-4">Coordonnées de la Pharmacie Agnès Praden</h2>
        <p class="mb-2">La Pharmacie Agnès Praden est située à :</p>
        <p class="mb-2">
          Centre commercial Intermarché, Les Allemandes,<br />
          198 Avenue des Frères Lumière,<br />
          30100 Alès
        </p>
        <p class="mb-2">
          Tél : <a href="tel:0466302260" class="text-blue-600 hover:underline">04 66 30 22 60</a>
        </p>
      </div>
  
      <!-- Horaires de la Pharmacie -->
      <div class="horaires mb-8">
        <h2 class="text-2xl font-semibold mb-4">Les Horaires de la Pharmacie Agnès Praden</h2>
        <p>
          La pharmacie Agnès Praden est ouverte non-stop de 8h à 20h du lundi au samedi.
        </p>
      </div>
  
      <!-- Logos Partenaires -->
      <div class="flex items-center gap-20 justify-center mt-12 mb-8">
        <a class="w-[10vw]" href="https://www.ars.sante.fr/" target="_blank" rel="noopener">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/ARS_logo.svg/1200px-ARS_logo.svg.png" alt="ARS Santé" />
        </a>
        <a
          class="w-[10vw]"
          href="https://www.ordre.pharmacien.fr/je-suis/patient-grand-public/rechercher-un-site-de-vente-en-ligne-autorise-a-vendre-des-medicaments?site="
          target="_blank"
          rel="noopener"
        >
          <img src="https://www.adop.help/wp-content/uploads/2022/12/logo-ordre-national-des-pharmaciens.png" alt="Ordre National des Pharmaciens" />
        </a>
        <a class="w-[10vw]" href="https://ansm.sante.fr/" target="_blank" rel="noopener">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/ANSM_logo.svg/1280px-ANSM_logo.svg.png" alt="ANSM" />
        </a>
      </div>
  
      <!-- Navigation Footer -->
      <ft-navigation />
    </section>
  </template>
  
  <style scoped>
  .materiel-medical p {
    line-height: 1.6;
  }
  
  .materiel-medical h2 {
    color: #1f2937; /* Gris foncé pour les titres */
  }
  
  .materiel-medical ul {
    list-style-type: disc;
  }
  
  .materiel-medical a {
    color: #3b82f6; /* Correspond à text-blue-600 de Tailwind */
    text-decoration: none;
  }
  
  .materiel-medical a:hover {
    text-decoration: underline;
  }
  
  .materiel-medical img {
    object-fit: cover;
  }
  
  @media (min-width: 768px) {
    .materiel-medical .grid-cols-1 {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .materiel-medical .grid-cols-1 {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  </style>
  
  <script lang="ts" setup>
  definePageMeta({ layout: 'main' });
  </script>
  