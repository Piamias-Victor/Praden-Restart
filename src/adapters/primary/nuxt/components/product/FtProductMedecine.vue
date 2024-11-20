<template lang="pug">
div
  li.flex.py-4
      div.h-24.w-24.flex-shrink-0.overflow-hidden.rounded-md.border
          img.h-full.w-full.object-cover.object-center(
              :src="item.img"
              :alt="item.name"
          )
      div.ml-4.flex.flex-1.flex-col.items-center.justify-center
          p.mr-1.text-sm.line-clamp-3.font-semibold {{ item.name }}
  a(href='https://agence-prd.ansm.sante.fr/php/ecodex/frames.php?specid=60234100&typedoc=R&ref=R0189465.htm' target='_blank')
    ft-button.button-solid.w-full
      span Voir la notice
      icon.icon-md(name="akar-icons:send")
</template>

<script lang="ts" setup>
defineProps({
  item: { type: Object, required: true }
})
</script>
