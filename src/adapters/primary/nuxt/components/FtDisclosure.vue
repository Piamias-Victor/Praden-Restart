<template lang="pug">
div.ft-disclosure
  Disclosure.bg-white.rounded-xl.p-4(v-slot='{ open }' :default-open="defaultOpen" as='div')
      h3.flow-root
          DisclosureButton.flex.w-full.items-center.justify-between.text-sm.text-contrast(class='hover:text-default')
              span.font-medium.text-main
                  slot(name="title")
              span.flex.items-center
                  icon(v-if='!open' aria-hidden='true' name="heroicons:plus").h-5.w-5
                  icon(v-else aria-hidden='true' name="heroicons:minus").h-5.w-5
          DisclosurePanel.mx-2
              div
                  slot.flex.items-center
</template>

<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

defineProps({
  defaultOpen: {
    type: Boolean,
    default: () => {
      return false
    }
  }
})
</script>
