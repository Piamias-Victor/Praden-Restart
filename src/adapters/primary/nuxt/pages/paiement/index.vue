<template>
    <section class="paiement-securise px-4 py-8">
      <h1 class="text-4xl font-bold mb-8 text-center text-main">Paiement Sécurisé</h1>
  
      <!-- Introduction -->
      <div class="introduction mb-8">
        <p class="mb-4">
          Réglez vos achats par carte bancaire pour un paiement 100% sécurisé : Carte Bleue, Visa, Mastercard et Apple Pay.
        </p>
      </div>
  
      <!-- Cartes Acceptées -->
      <div class="cartes-acceptes mb-8">
        <h2 class="text-2xl font-semibold mb-4">1/ Les cartes acceptées sont :</h2>
        <div class="flex flex-wrap items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            class="w-24 h-auto"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
            alt="Mastercard"
            class="w-24 h-auto"
          />
          <img
            src="https://www.prestasoo.com/images/logo-cb.jpg"
            alt="Carte Bleue"
            class="w-24 h-auto"
          />
          <img
            src="https://logo-marque.com/wp-content/uploads/2022/03/Apple-Pay-Logo.png"
            alt="Apple Pay"
            class="w-24 h-auto"
          />
        </div>
      </div>
  
      <!-- Processus de Paiement -->
      <div class="processus-paiement mb-8">
        <h2 class="text-2xl font-semibold mb-4">2/ Comment payer par carte bancaire :</h2>
        <ol class="list-decimal list-inside space-y-4">
          <li>
            <span class="font-semibold">Choisissez votre type de carte bancaire</span>, puis cliquez sur le bouton de paiement.
          </li>
          <li>
            Vous serez connecté à notre serveur de paiement sécurisé. Il vous suffira ensuite d'indiquer :
            <ul class="list-disc list-inside ml-6 mt-2 space-y-2">
              <li><strong>Le numéro de votre carte bancaire :</strong> 16 chiffres, présents en relief sur la face avant de votre carte.</li>
              <li><strong>La date de validité :</strong> en relief sur la face avant de votre carte, après la mention « EXPIRE FIN ».</li>
              <li><strong>Le cryptogramme :</strong> 3 derniers chiffres imprimés au dos de votre carte.</li>
            </ul>
          </li>
        </ol>
      </div>
  
      <!-- Sécurité du Paiement -->
      <div class="securite-paiement mb-8">
        <h2 class="text-2xl font-semibold mb-4">Sécurité du Paiement</h2>
        <p class="mb-4">
          Le paiement par carte bancaire est un moyen simple, rapide et sécurisé pour acheter en ligne. La transmission de vos informations personnelles et de vos données bancaires est entièrement sécurisée. Nous utilisons le procédé de cryptage SSL pour la transmission de vos données de paiement. Ce cryptage nous permet de vous assurer un niveau de sécurité élevé pour vos transactions.
        </p>
        <p class="mb-4">
          De plus, nous proposons <strong>Apple Pay</strong> pour un paiement encore plus rapide et sécurisé, directement depuis votre appareil Apple.
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
  .paiement-securise p {
    line-height: 1.6;
  }
  
  .paiement-securise h2 {
    color: #1f2937; /* Gris foncé pour les titres */
  }
  
  .paiement-securise .text-main {
    color: #E5017D; /* Couleur principale */
  }
  
  .paiement-securise ul {
    list-style-type: disc;
  }
  
  .paiement-securise ol {
    list-style-type: decimal;
  }
  
  .paiement-securise a {
    color: #E5017D; /* Couleur principale pour les liens */
    text-decoration: none;
  }
  
  .paiement-securise a:hover {
    text-decoration: underline;
  }
  
  .paiement-securise img {
    object-fit: contain;
  }
  
  .bg-main {
    background-color: #E5017D;
  }
  
  .bg-main-dark {
    background-color: #C40069; /* Couleur légèrement plus sombre pour le hover */
  }
  
  .text-main {
    color: #E5017D;
  }
  
  @media (min-width: 768px) {
    .paiement-securise .grid-cols-1 {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .paiement-securise .grid-cols-1 {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  </style>
  
  <script lang="ts" setup>
  definePageMeta({ layout: 'main' });
  </script>
  