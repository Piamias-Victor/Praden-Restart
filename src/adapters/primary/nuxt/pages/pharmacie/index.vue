<template>
  <section class="ma-pharmacie px-4 py-8">
    <h1 class="text-4xl font-bold mb-4 text-center text-main">Pharmacie Agnès Praden Alès</h1>

    <!-- Informations Générales -->
    <div class="info-general mb-8">
      <div class="flex flex-col md:flex-row justify-between items-start">
        <div class="address mb-4 md:mb-0">
          <h2 class="text-xl font-semibold">Adresse</h2>
          <p>198 Avenue des Frères Lumières<br />30100 ALES</p>
        </div>
        <div class="contact mb-4 md:mb-0">
          <h2 class="text-xl font-semibold">Contact</h2>
          <p>Tél : <a href="tel:0466302260" class="text-main">04 66 30 22 60</a></p>
          <p>Mail : <a href="mailto:webpharmaciepraden@gmail.com" class="text-main">Contactez-nous</a></p>
        </div>
        <div class="horaires">
          <h2 class="text-xl font-semibold">Horaires</h2>
          <p>Ouverte non-stop de 8h à 20h du lundi au samedi.</p>
        </div>
      </div>
    </div>

    <!-- Description de la Pharmacie -->
    <div class="description mb-8">
      <p>
        La pharmacie vous accueille le lundi de 8h à 20h et du mardi au samedi de 8h à 20h. Une équipe de professionnels
        de santé est à votre service tout au long de l’année et vous propose un large choix de médicaments et de
        produits de parapharmacie.
      </p>
      <p class="mt-4">
        Située à l'extérieur de la galerie marchande du centre commercial Intermarché d'Alès et bénéficiant d'une
        surface de vente de 800m², la pharmacie Agnès Praden vous apporte une réponse adaptée grâce à son équipe de
        collaborateurs entièrement dévouée au service de votre santé.
      </p>
    </div>

    <!-- Services -->
    <div class="services mb-8">
      <h2 class="text-xl font-semibold mt-6">Nos Services</h2>
      <p>
        La pharmacie met à votre disposition un service d’ordonnance en ligne et un service de Click & Collect avec
        lesquels vous pouvez acheter en ligne et venir retirer votre commande à la pharmacie.
      </p>
    </div>

    <!-- Carte Google Maps -->
    <div class="map mb-8">
      <h2 class="text-xl font-semibold mt-6">Nous Trouver</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.936942123456!2d3.8731990150000003!3d44.125406045000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b68e9d6e1f1234%3A0xabcdef1234567890!2s198%20Avenue%20des%20Fr%C3%A8res%20Lumi%C3%A8res%2C%2030100%20Al%C3%A8s!5e0!3m2!1sfr!2sfr!4v1681234567890!5m2!1sfr!2sfr"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <!-- Logos Partenaires -->
    <div class="flex items-center gap-20 justify-center mb-8">
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
.ma-pharmacie p {
  line-height: 1.6;
}

.ma-pharmacie .info-general h2 {
  margin-bottom: 0.5rem;
}

.ma-pharmacie .info-general p a {
  color: #3b82f6; /* Correspond à text-blue-600 de Tailwind */
  text-decoration: none;
}

.ma-pharmacie .info-general p a:hover {
  text-decoration: underline;
}

.map iframe {
  border-radius: 8px;
}
</style>

<script lang="ts" setup>
import { useHead } from 'nuxt/app';

definePageMeta({ layout: 'main' });

useHead({
  title: 'Pharmacie Agnès Praden Alès - Services, Adresse et Horaires',
  meta: [
    {
      name: 'description',
      content:
        'Découvrez la Pharmacie Agnès Praden à Alès : services de santé, horaires d’ouverture, localisation et contact. Située au centre commercial Intermarché.',
    },
  ],
  link: [
      {
        rel: "canonical",
        href: `https://pharmacieagnespraden.com/pharmacie`, // URL actuelle de la page comme lien canonique
      },
    ],
});
</script>
