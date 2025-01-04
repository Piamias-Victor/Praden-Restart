<template lang="pug">
div
  li.flex.py-4
      div.h-24.w-24.flex-shrink-0.overflow-hidden.rounded-md.border
        img.h-full.w-full.object-cover.object-center(
          v-if="item && item.img && item.img.length > 0"
          :src="item.img"
          :alt="item.name"
        )
        img.h-full.w-full.object-cover.object-center(
          v-else
          src="https://i.postimg.cc/GpcFkW2C/Whats-App-Image-2024-12-30-at-10-52-33.jpg"
          :alt="item.name"
        )
      div.ml-4.flex.flex-1.flex-col.items-center.justify-center
          p.mr-1.text-sm.line-clamp-3.font-semibold {{ item.name }}
  a(:href='item.noticeUrl' target='_blank')
    ft-button.button-solid.w-full
      span Voir la notice
      icon.icon-md(name="akar-icons:send")
</template>

<script lang="ts" setup>
defineProps({
  item: { type: Object, required: true },
});
</script>
