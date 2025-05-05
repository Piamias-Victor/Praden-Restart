<template lang="pug">
    .border-0.bg-background.px-3
        label.block.text-xs.font-medium(for='for')
        slot
        span(v-if="require") *
        .mt-1
        select.block.w-full.rounded-md.border-light.shadow-sm(v-bind="$attrs" class='focus-border-default focus-ring-colored sm-text-sm')
          slot(name="options")
    </template>
    
    <script lang="ts" setup>
    defineProps({
      for: {
        type: String,
        default() {
          return '';
        },
      },
      require: {
        type: Boolean,
        default() {
          return false;
        },
      },
    });
    </script>