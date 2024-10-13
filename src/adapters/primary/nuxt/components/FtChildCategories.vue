<template lang="pug">
div.py-4.px-2.flex.items-center.gap-2.overflow-hidden.overflow-x-auto.no-scrollbar
    ft-button.bg-white.rounded-xl.px-6(@click="goBack")
      icon.icon-md(name="icon-park-outline:return")
      span Retour
    ft-button.bg-white.rounded-xl.px-6.text-primary11(v-for='category in props.categoriesVM.items' :key="category.uuid" @click="goToCat(category.uuid)")
        img.icon-md(:src="category.icon")
        span.whitespace-nowrap {{ category.name }}
    //- ft-button.bg-white.rounded-xl.px-6
    //-     img.icon-md(src="/assets/dermoBlack.svg")
    //-     span Dermo
    //- ft-button.bg-white.rounded-xl.px-6
    //-     img.icon-md(src="/assets/dermoBlack.svg")
    //-     span Bebe
    //- ft-button.bg-white.rounded-xl.px-6
    //-     img.icon-md(src="/assets/dermoBlack.svg")
    //-     span Sante
    //- ft-button.bg-white.rounded-xl.px-6
    //-     img.icon-md(src="/assets/dermoBlack.svg")
    //-     span Complement
    //- ft-button.bg-white.rounded-xl.px-6
    //-     img.icon-md(src="/assets/dermoBlack.svg")
    //-     span Nature
    //- ft-button.bg-white.rounded-xl.px-6
    //-     img.icon-lg(src="/assets/dermoBlack.svg")
    //-     span Veto
</template>

<script lang="ts" setup>
const props = defineProps<{
  categoriesVM: any
}>()

definePageMeta({ layout: 'main' })

const router = useRouter()

const goToCat = (path: string) => {
  router.push('/categories/' + path)
}

const goBack = () => {
  router.back()
}
</script>
