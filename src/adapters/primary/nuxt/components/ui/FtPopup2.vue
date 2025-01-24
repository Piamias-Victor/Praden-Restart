<template lang="pug">
div.fixed.inset-0.z-50.flex.items-center.justify-center.bg-black.bg-opacity-50(v-if="show")
    div.relative.bg-white.p-6.rounded-lg.shadow-lg.overflow-y-auto.w-full.max-w-lg(class='')
        div.flex.items-center.justify-between.gap-8.mb-4
            span.text-xl.font-semibold.hidden(class='sm:block') Sélectionnez un jour et une heure
            ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="closePopup")
                icon.icon-sm(name="ph:x-bold")
        div.flex.flex-col.items-center.gap-6
            // Sélecteur de jour
            div.w-full
                label.block.text-sm.font-medium.text-gray-700.mb-1 Sélectionnez un jour
                select.w-full.p-2.border.rounded-lg(@change="updateDay($event)")
                    option(value="" disabled selected) -- Choisir un jour --
                    option(v-for="day in availableDays" :key="day" :value="day") {{ day }}
            // Sélecteur d'heure
            div.w-full
                label.block.text-sm.font-medium.text-gray-700.mb-1 Sélectionnez une heure
                select.w-full.p-2.border.rounded-lg(@change="updateHour($event)")
                    option(value="" disabled selected) -- Choisir une heure --
                    option(v-for="hour in availableHours" :key="hour" :value="hour") {{ hour }}
            // Affichage de la sélection
            p.text-main.font-semibold.text-lg.text-center(v-if="selectedDay && selectedHour")
                | Vous avez sélectionné : {{ selectedDay }}, à {{ selectedHour }}
            div(v-else)
                p.text-gray-500.text-sm.text-center Veuillez choisir un jour et une heure
            // Bouton pour confirmer la sélection
            ft-button.button-solid.w-full(@click="confirmSelection") Confirmer
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

// Props pour afficher ou cacher le popup
const props = defineProps<{ show: boolean }>();

// Émissions d'événements vers le parent
const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'selection-confirmed', selection: { day: string; hour: string }): void;
}>();

// Variables réactives pour la sélection
const selectedDay = ref<string | null>(null);
const selectedHour = ref<string | null>(null);

// Liste des jours disponibles
const availableDays = ref([
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
]);

// Liste des heures disponibles (générées dynamiquement)
const availableHours = computed(() => {
  const hours = [];
  for (let i = 8; i <= 19; i++) {
    hours.push(`${i}:00`, `${i}:30`);
  }
  return hours;
});

// Mise à jour du jour sélectionné
const updateDay = (event: Event) => {
  selectedDay.value = (event.target as HTMLSelectElement).value;
};

// Mise à jour de l'heure sélectionnée
const updateHour = (event: Event) => {
  selectedHour.value = (event.target as HTMLSelectElement).value;
};

// Confirmer la sélection et émettre un événement vers le parent
const confirmSelection = () => {
  if (!selectedDay.value || !selectedHour.value) {
    alert('Veuillez sélectionner un jour et une heure.');
    return;
  }

  emit('selection-confirmed', {
    day: selectedDay.value,
    hour: selectedHour.value,
  });
  closePopup();
};

// Fermer le popup
const closePopup = () => {
  emit('close');
};
</script>

<style scoped>
/* Styles pour le popup */
div.fixed {
  z-index: 50;
}

div.relative {
  max-width: 500px;
  width: 100%;
  overflow-y: auto;
  padding: 1.5rem;
}

select {
  font-size: 1rem;
  line-height: 1.5;
}

p {
  text-align: center;
  margin: 0;
  padding: 0.5rem 0;
}

@media (min-width: 640px) {
  div.relative {
    max-width: 600px;
  }
}
</style>
