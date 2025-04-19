<template>
    <section class="recrutement px-4 py-8">
      <h1 class="text-4xl font-bold mb-8 text-center text-main">Recrutement</h1>
  
      <!-- Image de couverture -->
      <div class="couverture mb-8 flex justify-center">
        <img 
          src="https://i.postimg.cc/gJ7xBvY2/offre-emploi-2025.png" 
          alt="Recrutement Pharmacie Agnès Praden" 
          class="w-max-3xl rounded-lg shadow-lg"
        />
      </div>
  
      <!-- Présentation de la Pharmacie -->
      <div class="presentation mb-8">
        <p class="mb-4">
          La Pharmacie Agnès Praden, située à Alès, est une officine moderne et innovante, forte d'une équipe dynamique de 45 collaborateurs. 
          Reconnue pour la qualité de son accueil et son engagement envers la santé, elle offre un environnement de travail stimulant, propre et accessible, 
          avec de nombreuses opportunités d'évolution. Rejoindre notre équipe, c'est intégrer une structure humaine et à l'écoute, tournée vers l'avenir et les projets ambitieux.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div class="bg-gray-50 p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4 text-main">Notre mission</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>Le meilleur pour ma santé</li>
            </ul>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4 text-main">Nos engagements</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>Un environnement en constante évolution</li>
              <li>Précurseur dans le domaine de la santé</li>
              <li>Une équipe dirigeante humaine et à l'écoute</li>
              <li>Des projets innovants et stimulants</li>
              <li>Un cadre de travail dynamique et enrichissant</li>
            </ul>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4 text-main">Vos futurs avantages</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>Accessibilité facile et place de parking</li>
              <li>Pharmacie propre et accueillante</li>
              <li>Grande équipe dynamique</li>
              <li>Polyvalence et diversité des missions</li>
              <li>Travailler dans une pharmacie réputée</li>
            </ul>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg shadow">
            <h3 class="text-xl font-semibold mb-4 text-main">Notre pharmacie est faite pour vous si vous êtes</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>À l'écoute</li>
              <li>Dynamique</li>
              <li>Doté de l'esprit d'équipe</li>
              <li>Doté d'une capacité d'adaptation</li>
              <li>Communicatif(ive)</li>
            </ul>
          </div>
        </div>
      </div>
  
      <!-- Offres d'emploi -->
      <div class="offres-emploi mb-8">
        <h2 class="text-2xl font-semibold mb-6 text-main">Nos offres d'emploi</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Offre 1 -->
          <div class="bg-white p-6 rounded-lg shadow-lg border border-main hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold mb-4 text-main">DOCTEUR EN PHARMACIE H/F</h3>
            <p class="mb-4 font-semibold">Nous recherchons pour un CDI 35h</p>
            <ul class="list-disc list-inside space-y-2 mb-4">
              <li>Accueil et prise en charge du client</li>
              <li>Connaissance des produits</li>
              <li>Gestion documentaire</li>
              <li>Administratif client</li>
              <li>Gestion du personnel</li>
            </ul>
            
          </div>
          
          <!-- Offre 2 -->
          <div class="bg-white p-6 rounded-lg shadow-lg border border-main hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold mb-4 text-main">PRÉPARATEUR EN PHARMACIE H/F</h3>
            <p class="mb-4 font-semibold">Nous recherchons pour un CDI 35h</p>
            <ul class="list-disc list-inside space-y-2 mb-4">
              <li>Accueil et prise en charge du client</li>
              <li>Encaissement client</li>
              <li>Fidélisation client</li>
              <li>Gestion d'une caisse</li>
            </ul>
            
          </div>
        </div>
      </div>
  
      <!-- Information postulation -->
      <div class="postuler mb-8 text-center">
        <p class="text-lg">
          Pour postuler, envoyez votre candidature à l'adresse mail suivante : 
          <a href="mailto:rh@pharmaciepraden.com" class="text-main font-semibold hover:underline">rh@pharmaciepraden.com</a>
        </p>
      </div>
  
      <!-- Logos Partenaires -->
      <div class="flex items-center gap-20 justify-center mt-12 mb-8">
        <a class="w-[10vw]" href="https://www.ars.sante.fr/" target="_blank" rel="noopener">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/ARS_logo.svg/1200px-ARS_logo.svg.png"
            alt="ARS Santé"
          />
        </a>
        <a
          class="w-[10vw]"
          href="https://www.ordre.pharmacien.fr/je-suis/patient-grand-public/rechercher-un-site-de-vente-en-ligne-autorise-a-vendre-des-medicaments?site="
          target="_blank"
          rel="noopener"
        >
          <img
            src="https://www.adop.help/wp-content/uploads/2022/12/logo-ordre-national-des-pharmaciens.png"
            alt="Ordre National des Pharmaciens"
          />
        </a>
        <a class="w-[10vw]" href="https://ansm.sante.fr/" target="_blank" rel="noopener">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/ANSM_logo.svg/1280px-ANSM_logo.svg.png"
            alt="ANSM"
          />
        </a>
      </div>
  
      <!-- Navigation Footer -->
      <ft-navigation />
    </section>
  </template>
  
  <style scoped>
  .recrutement p {
    line-height: 1.6;
  }
  
  .recrutement h2 {
    color: #1f2937; /* Gris foncé pour les titres */
  }
  
  .recrutement .text-main {
    color: #e5017d; /* Couleur principale */
  }
  
  .recrutement ul {
    list-style-type: disc;
  }
  
  .recrutement a {
    color: #e5017d; /* Couleur principale pour les liens */
    text-decoration: none;
  }
  
  .recrutement a:hover {
    text-decoration: underline;
  }
  
  .bg-main {
    background-color: #e5017d;
  }
  
  .border-main {
    border-color: #e5017d;
  }
  
  @media (min-width: 768px) {
    /* Ajoutez ici des styles responsifs si nécessaire */
  }
  </style>
  
  <script lang="ts" setup>
  import { useHead } from 'nuxt/app';
  
  definePageMeta({ layout: 'main' });
  
  useHead({
    title: 'Recrutement - Rejoignez la Pharmacie Agnès Praden',
    meta: [
      {
        name: 'description',
        content:
          'Découvrez nos offres d\'emploi et rejoignez l\'équipe de la Pharmacie Agnès Praden à Alès. Postes de docteur en pharmacie et préparateur en pharmacie disponibles.',
      },
    ],
    link: [
        {
          rel: "canonical",
          href: `https://pharmacieagnespraden.com/recrutement`, // URL actuelle de la page comme lien canonique
        },
      ],
  });
  </script>