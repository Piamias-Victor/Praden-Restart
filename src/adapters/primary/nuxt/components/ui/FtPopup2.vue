<template lang="pug">
div.fixed.inset-0.z-50.flex.items-center.justify-center.bg-black.bg-opacity-50(v-if="show")
    div.relative.bg-white.p-6.rounded-lg.shadow-lg.overflow-y-auto.w-full.max-w-lg(class='h-[70vh]')
        div.flex.items-center.justify-between.gap-8.mb-4
            span.text-xl.font-semibold.hidden(class='sm:block') Sélectionnez une date et une heure
            ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="closePopup")
                icon.icon-sm(name="ph:x-bold")
        div.flex.flex-col.items-center.gap-6
            // Sélecteur de jour (Calendrier)
            div.w-full
                label.block.text-sm.font-medium.text-gray-700.mb-1 Sélectionnez une date
                VueDatePicker(
                    v-model="selectedDate"
                    locale="fr"
                    :translations="translations"
                    cancelText="Annuler"
                    selectText="Sélectionner"
                    :min-date="new Date()"
                    :disabled-week-days="[0]"
                    :model-config="{ type: 'date' }"
                    class="w-full p-2 border rounded-lg"
                    :min-time="{ hours: 8, minutes: 30 }"
                    :max-time="{ hours: 19, minutes: 30 }"
                    time-picker-inline
                )
            // Sélecteur d'heure
            // Affichage de la sélection
            // Bouton pour confirmer la sélection
            ft-button.button-solid.w-full(
                @click="confirmSelection"
                :disabled="!selectedDate"
                class="transition-opacity"
                :class="{ 'opacity-50 cursor-not-allowed': !selectedDate }"
            ) Confirmer
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'; // Importez les styles du datepicker

// Props pour afficher ou cacher le popup
const props = defineProps<{ show: boolean }>();

// Émissions d'événements vers le parent
const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'selection-confirmed', selection: { timestamp: number }): void;
}>();

const date = ref(new Date());

// Ajoutez des traductions personnalisées en français
const translations = {
    cancel: "Annuler",
    select: "Sélectionner",
    days: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    months: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
    ],
    monthsShort: [
        "Janv",
        "Févr",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juil",
        "Août",
        "Sept",
        "Oct",
        "Nov",
        "Déc",
    ],
};

// Variables réactives
const selectedDate = ref<Date | null>(null);
const selectedHour = ref<string | null>(null);

// Liste des heures disponibles
const availableHours = computed(() => {
  const hours = [];
  for (let i = 8; i <= 19; i++) {
    hours.push(`${i}:00`, `${i}:30`);
  }
  return hours;
});

// Formattez la date pour l'affichage
const formattedDate = computed(() => {
  if (!selectedDate.value) return '';
  return selectedDate.value.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});

// Mettre à jour l'heure sélectionnée
const updateHour = (event: Event) => {
  selectedHour.value = (event.target as HTMLSelectElement).value;
};

// Confirmez la sélection
const confirmSelection = () => {
  if (!selectedDate.value) {
    alert('Veuillez sélectionner une date et une heure.');
    return;
  }

  // Créez un timestamp
  const timestamp = new Date(selectedDate.value);

  console.log('timestamp', timestamp)
  console.log('selectedDate.value', selectedDate.value)

  emit('selection-confirmed', { timestamp });
  closePopup();
};

// Fermez le popup
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
