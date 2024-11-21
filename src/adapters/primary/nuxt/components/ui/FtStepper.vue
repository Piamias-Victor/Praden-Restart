<template lang="pug">
ol.flex.items-center.justify-between.w-full.text-sm.font-medium.text-center.gap-2
    li.flex.items-center.gap-1(:class="{ 'text-main': props.step === 1, 'text-contrast': props.step !== 1 }")
        div
            icon.icon-md(name="akar-icons:shopping-bag")
        span Panier
    div.bg-contrast2.w-full(class='h-[1px]')
    li.flex.items-center.gap-1(:class="{ 'text-main': props.step === 2, 'text-contrast': props.step != 2 }")
        div.flex.flex-col.items-center.gap-2
            icon.icon-md(name="material-symbols:supervised-user-circle-outline")
        span Compte
    div.bg-contrast2.w-full(class='h-[1px]')
    li.flex.items-center.gap-1(:class="{ 'text-main': props.step === 3, 'text-contrast': props.step != 3 }")
        div.flex.flex-col.items-center.gap-2
            icon.icon-md(name="cil:truck")
        span Livraison
</template>

<script lang="ts" setup>
const props = defineProps<{
  step: number;
}>();
</script>
