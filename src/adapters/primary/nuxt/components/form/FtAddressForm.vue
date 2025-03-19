<template lang="pug">
  .mt-4.grid.grid-cols-1.gap-y-2
      ft-input(
          :value="props.user.firstname"
          for="first-name"
          require
          type='text'
          name='first-name'
          autocomplete='given-name'
          @input="firstnameChanged"
      ) 
          span.font-semibold.text-sm Prénom
      ft-input(
          :value="props.user.lastname"
          for="last-name"
          require
          type='text'
          name='last-name'
          autocomplete='family-name'
          @input="lastnameChanged"
      ) 
          span.font-semibold.text-sm Nom
      ft-input(
          :value="props.user.address?.country || ''" 
          for="country"
          require
          type='text'
          name='country'
          @input="countryChanged"
      )
          span.font-semibold.text-sm Pays
      ft-input(
          :value="props.user.address?.address || ''"
          for="address"
          require
          type='text'
          name='address'
          autocomplete='street-address'
          @input="addressChanged"
      ) 
          span.font-semibold.text-sm Adresse
      ft-input(
          :value="props.user.address?.appartement || ''"
          for="apartment"
          type='text'
          name='apartment'
          @input="appartementChanged"
      ) 
          span.font-semibold.text-sm  Appartement
      ft-input(
          :value="props.user.address?.zip || ''"
          for="postal-code"
          require
          type='text'
          name='postal-code'
          autocomplete='postal-code'
          @input="zipChanged"
      ) 
          span.font-semibold.text-sm Code postal
          p.text-red-500.text-sm.mt-1(v-if="zipError") {{ zipError }}
      ft-input(
          :value="props.user.address?.city || ''"
          for="city"
          require
          type='text'
          name='city'
          autocomplete='address-level2'
          @input="cityChanged"
      ) 
          span.font-semibold.text-sm Ville
  </template>
  
  <script lang="ts" setup>
  import { ref, computed } from "vue";
  import { getUserVM } from "@adapters/primary/viewModels/get-user/getUserVM";
  
  const props = defineProps<{ user: User }>();
  
  const emit = defineEmits<{
    (e: "firstname-changed", value: string): void;
    (e: "lastname-changed", value: string): void;
    (e: "country-changed", value: string): void;
    (e: "address-changed", value: string): void;
    (e: "appartement-changed", value: string): void;
    (e: "city-changed", value: string): void;
    (e: "zip-changed", value: string): void;
  }>();
  
  const zipError = ref<string | null>(null);
  
  const validateFrenchZip = (zip: string) => {
    // Liste des codes postaux français métropolitains : 01xxx à 95xxx
    const regexFranceMetropole = /^(0[1-9]|[1-8]\d|9[0-5])\d{3}$/;
  
    if (!regexFranceMetropole.test(zip)) {
      zipError.value = "Nous ne livrons pas à cette adresse.";
    } else {
      zipError.value = null;
    }
  };
  
  const zipChanged = (e: any) => {
    const zip = e.target.value;
    validateFrenchZip(zip);
    emit("zip-changed", zip);
  };
  
  const firstnameChanged = (e: any) => {
    emit("firstname-changed", e.target.value);
  };
  
  const lastnameChanged = (e: any) => {
    emit("lastname-changed", e.target.value);
  };
  
  const countryChanged = (e: any) => {
    emit("country-changed", e.target.value);
  };
  
  const addressChanged = (e: any) => {
    emit("address-changed", e.target.value);
  };
  
  const appartementChanged = (e: any) => {
    emit("appartement-changed", e.target.value);
  };
  
  const cityChanged = (e: any) => {
    emit("city-changed", e.target.value);
  };
  
  const user = computed(() => {
    return getUserVM();
  });
  </script>