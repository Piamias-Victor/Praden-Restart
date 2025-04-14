<template>
  <section class="mentions-legales px-4 py-8">
    <h1 class="text-4xl font-bold mb-4 text-center text-main">Nos engagements</h1>
    <h2 class="text-xl font-semibold mt-6">Le service</h2>
    <p>
      Lors de chacun de vos passages à la pharmacie Agnès Praden nous nous engageons à vous apporter une réponse
      adaptée, à vous servir au mieux et à vous faire gagner du temps grâce à équipe dynamique au service de votre
      hypersatisfaction.
    </p>
    <h2 class="text-xl font-semibold mt-6">Le conseil et l’information</h2>
    <p>
      Grâce à notre équipe de pharmaciens et de préparateurs spécialisés et régulièrement formés, vous recevez un
      conseil officinal au plus près de vos besoins. Nous nous engageons à vous informer avec le plus de transparence
      possible sur les médicaments prescrits.
    </p>
    <h2 class="text-xl font-semibold mt-6">Le prix</h2>
    <p>La pharmacie s’engage à vous proposer les meilleurs prix, en parapharmacie tout comme pour les médicaments.</p>
    <h2 class="text-xl font-semibold mt-6">La nouveauté</h2>
    <p>
      Nous nous engageons à vous faire profiter des dernières nouveautés et innovations et vous les faire tester. Nous
      mettons à votre disposition une zone réservée afin que vous puissiez tester, toucher et sentir les produits de
      parapharmacie.
    </p>
    <h2 class="text-xl font-semibold mt-6">La nouveauté</h2>
    <p>
      Nous nous engageons à vous faire profiter des dernières nouveautés et innovations et vous les faire tester. Nous
      mettons à votre disposition une zone réservée afin que vous puissiez tester, toucher et sentir les produits de
      parapharmacie.
    </p>

    <h2 class="text-xl font-semibold mt-6">La citoyenneté</h2>
    <p>
      Notre pharmacie est accessible et conforme aux normes handicapées. Nous portons une attention particulière aux
      personnes à mobilité réduite et aux personnes âgées. Nous assurons l’emploi des jeunes : apprentis et stagiaires
      dans notre activité. Nous nous engageons à recycler les médicaments et emballages rapportés à la Pharmacie afin de
      sécuriser le processus d’élimination.
    </p>
    <h2 class="text-xl font-semibold mt-6">Pharmacie certifée</h2>
    <p>
      C'est grâce au respect de ces différents engagements que la pharmacie Agnès Praden est aujourd'hui certifiée ISO
      9001v2008 /QMS-Pharma 2010.
    </p>
    <div class="h-10" />
    <div class="flex items-center gap-20 justify-center">
      <a class="w-[10vw]" href="https://www.ars.sante.fr/" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/ARS_logo.svg/1200px-ARS_logo.svg.png" />
      </a>
      <a
        class="w-[10vw]"
        href="https://www.ordre.pharmacien.fr/je-suis/patient-grand-public/rechercher-un-site-de-vente-en-ligne-autorise-a-vendre-des-medicaments?site="
        target="_blank"
      >
        <img src="https://www.adop.help/wp-content/uploads/2022/12/logo-ordre-national-des-pharmaciens.png" />
      </a>
      <a class="w-[10vw]" href="https://ansm.sante.fr/" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/ANSM_logo.svg/1280px-ANSM_logo.svg.png" />
      </a>
    </div>
    <ft-navigation />
  </section>
</template>

<style scoped>
.mentions-legales p {
  line-height: 1.6;
}
</style>

<script lang="ts" setup>
import { useHead } from 'nuxt/app';

definePageMeta({ layout: 'main' });

useHead({
  title: 'Nos engagements - Pharmacie Agnès Praden',
  meta: [
    {
      name: 'description',
      content:
        'Découvrez les engagements de la Pharmacie Agnès Praden : qualité du service, conseil officinal, innovations, accessibilité, et respect de l’environnement.',
    },
  ],
  link: [
      {
        rel: "canonical",
        href: `https://pharmacieagnespraden.com/engagement`, // URL actuelle de la page comme lien canonique
      },
    ],
});
</script>
