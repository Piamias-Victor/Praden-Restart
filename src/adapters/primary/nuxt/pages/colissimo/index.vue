<template lang="pug">
  button.btn-primary(@click="openPopup") Ouvrir le popup
  ft-popup(:show="showPopup" @close="closePopup")
</template>

<script lang="ts" setup>
const showPopup = ref(false);

const openPopup = () => {
  showPopup.value = true;
};

const closePopup = () => {
  showPopup.value = false;
};
</script>
