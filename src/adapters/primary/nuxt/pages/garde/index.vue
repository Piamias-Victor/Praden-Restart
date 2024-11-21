<template>
  <section class="mentions-legales px-4 py-8">
    <h1 class="text-4xl font-bold mb-4 text-center text-main">Pharmacies de garde</h1>
    <p>
      Un service de garde est assuré toutes les nuits, ainsi que les week-end et jours fériés, dans les différentes
      pharmacies de l’agglomération. Le dimanche et les jours fériés, vous pouvez vous rendre directement à la pharmacie
      de 8h à 21h. Après 21h, il est impératif d’être en possession d’une ordonnance et de passer par le commissariat de
      police : 1 rue Saint-Sébastien, 30100 Alès, afin de connaître la pharmacie de garde.
    </p>
    <h2 class="text-xl font-semibold mt-6">Pour connaître la pharmacie de garde :</h2>
    <p>
      Affichage dans les pharmacies, par voie de presse ou auprès du commissariat de police. Audiotel 32 37 – 24h/24
      7j/7 0.35 €/min – À l’initiative des Syndicats Pharmaceutiques de France en charge de l’organisation des gardes
    </p>
    <ft-navigation />
  </section>
</template>

<style scoped>
.mentions-legales p {
  line-height: 1.6;
}
</style>

<script lang="ts" setup>
definePageMeta({ layout: 'main' });
</script>
