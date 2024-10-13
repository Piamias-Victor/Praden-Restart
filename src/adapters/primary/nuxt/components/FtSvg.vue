<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="w-6 h-6"
    :class="computedClass"
  >
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM11 17v-6h2v6h-2zm0-8V7h2v2h-2z"
    />
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps<{
  class: string
}>()

// Computed property to apply the passed Tailwind class dynamically
const computedClass = computed(() => {
  return props.class || ''
})
</script>
