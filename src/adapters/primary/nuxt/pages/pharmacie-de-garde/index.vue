<template>
    <section class="pharmacies-de-garde px-4 py-8">
      <h1 class="text-4xl font-bold mb-8 text-center text-main">Pharmacies de garde</h1>
  
      <!-- Image de couverture -->
  
      <!-- Texte d'information -->
      <div class="information mb-8">
        <p class="mb-4">
          Un service de garde est assuré chaque nuit, ainsi que les week-ends et jours fériés, dans les pharmacies de l'agglomération. 
          Le dimanche et les jours fériés, vous pouvez vous rendre directement à la pharmacie de garde entre 8h et 21h. 
          Après 21h, il est obligatoire de présenter une ordonnance et de se rendre au commissariat de police, 
          situé au 1 rue Saint-Sébastien, 30100 Alès, pour connaître la pharmacie de garde accessible.
        </p>
        <p class="font-semibold text-lg mt-6 mb-4">
          Retrouvez les pharmacies de garde les dimanches et jours fériés ci-dessous :
        </p>
      </div>
  
      <!-- Liste des pharmacies de garde -->
      <div class="liste-gardes mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Dimanche 20 avril -->
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold mb-4 text-main">Dimanche 20 avril</h3>
            <p class="font-semibold mb-2">Pharmacie de Rochebelle</p>
            <div class="flex items-center mb-2">
              <span class="text-main mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
              </span>
              <span>14 Quai Ferreol, 30100 Alès</span>
            </div>
            <div class="flex items-center">
              <span class="text-main mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <span>04 66 56 68 63</span>
            </div>
          </div>
          
          <!-- Lundi 21 avril -->
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold mb-4 text-main">Lundi 21 avril</h3>
            <p class="font-semibold mb-2">Pharmacie Agnès Praden</p>
            <div class="flex items-center mb-2">
              <span class="text-main mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
              </span>
              <span>198 Avenue des Frères Lumière, 30100 Alès</span>
            </div>
            <div class="flex items-center">
              <span class="text-main mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <span>04 66 30 22 60</span>
            </div>
          </div>
          
          <!-- Dimanche 27 avril -->
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold mb-4 text-main">Dimanche 27 avril</h3>
            <p class="font-semibold mb-2">Pharmacie de la Pyramide</p>
            <div class="flex items-center mb-2">
              <span class="text-main mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
              </span>
              <span>36 Avenue du Château, 30380 Saint Christol lès Alès</span>
            </div>
            <div class="flex items-center">
              <span class="text-main mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <span>04 66 60 90 13</span>
            </div>
          </div>
          
          <!-- Jeudi 1er mai -->
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold mb-4 text-main">Jeudi 1er mai</h3>
            <p class="font-semibold mb-2">Pharmacie du Centre</p>
            <div class="flex items-center mb-2">
              <span class="text-main mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
              </span>
              <span>4 Rue Saint-Jean, 30340 Saint Privat des Vieux</span>
            </div>
            <div class="flex items-center">
              <span class="text-main mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <span>04 66 86 29 31</span>
            </div>
          </div>
          
          <!-- Dimanche 4 mai -->
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold mb-4 text-main">Dimanche 4 mai</h3>
            <p class="font-semibold mb-2">Pharmacie Casado</p>
            <div class="flex items-center mb-2">
              <span class="text-main mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
              </span>
              <span>Avenue Jules Ferry, 30520 Saint Martin de Valgalgues</span>
            </div>
          </div>
          
          <!-- Jeudi 8 mai -->
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold mb-4 text-main">Jeudi 8 mai</h3>
            <p class="font-semibold mb-2">Pharmacie Gibault</p>
            <div class="flex items-center mb-2">
              <span class="text-main mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
              </span>
              <span>CC Intermarché Route d'Anduze, 30380 Saint Christol lès Alès</span>
            </div>
            <div class="flex items-center">
              <span class="text-main mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <span>04 66 60 87 19</span>
            </div>
          </div>
          
          <!-- Dimanche 11 mai -->
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold mb-4 text-main">Dimanche 11 mai</h3>
            <p class="font-semibold mb-2">Pharmacie Lafayette</p>
            <div class="flex items-center mb-2">
              <span class="text-main mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
              </span>
              <span>19 rue Edgard Quinet, 30100 Alès</span>
            </div>
            <div class="flex items-center">
              <span class="text-main mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <span>04 66 52 52 24</span>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Informations complémentaires -->
      <div class="complementaire bg-gray-50 p-6 rounded-lg shadow mb-8">
        <h2 class="text-xl font-semibold mb-4 text-main">Pour connaître la pharmacie de garde :</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Affichage dans les pharmacies</li>
          <li>Par voie de presse</li>
          <li>Auprès du commissariat de police</li>
          <li>Audiotel 32 37 – 24h/24 7j/7 (0.35 €/min) – À l'initiative des Syndicats Pharmaceutiques de France en charge de l'organisation des gardes</li>
        </ul>
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
        <a class="w-[10vw]" target="_blank" rel="noopener">
          <img
            src="https://i.postimg.cc/rpQ00Vbt/unnamed.png"
            alt="Telephone Santé"
          />
        </a>
      </div>

     
      <!-- Navigation Footer -->
      <ft-navigation />
    </section>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Mark+Pro:wght@400;500;700&display=swap');
  
  .pharmacies-de-garde {
    font-family: 'Mark Pro', sans-serif;
  }
  
  .pharmacies-de-garde p {
    line-height: 1.6;
  }
  
  .pharmacies-de-garde h2 {
    color: #1f2937; /* Gris foncé pour les titres */
  }
  
  .pharmacies-de-garde .text-main {
    color: #e5017d; /* Couleur principale */
  }
  
  .pharmacies-de-garde ul {
    list-style-type: disc;
  }
  
  .pharmacies-de-garde a {
    color: #e5017d; /* Couleur principale pour les liens */
    text-decoration: none;
  }
  
  .pharmacies-de-garde a:hover {
    text-decoration: underline;
  }
  
  .bg-main {
    background-color: #e5017d;
  }
  
  .border-main {
    border-color: #e5017d;
  }
  
  @media (min-width: 768px) {
    /* Styles responsifs si nécessaire */
  }
  </style>
  
  <script lang="ts" setup>
  import { useHead } from 'nuxt/app';
  
  definePageMeta({ layout: 'main' });
  
  useHead({
    title: 'Pharmacies de garde - Pharmacie Agnès Praden à Alès',
    meta: [
      {
        name: 'description',
        content:
          'Consultez la liste des pharmacies de garde à Alès et ses environs. Retrouvez les horaires et coordonnées des pharmacies assurant les services de garde les dimanches et jours fériés.',
      },
    ],
    link: [
        {
          rel: "canonical",
          href: `https://pharmacieagnespraden.com/pharmacies-de-garde`, // URL actuelle de la page comme lien canonique
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Mark+Pro:wght@400;500;700&display=swap",
        },
      ],
  });
  </script>