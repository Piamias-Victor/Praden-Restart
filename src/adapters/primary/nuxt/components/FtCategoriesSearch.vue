<template lang="pug">
div.py-4.px-2.flex.items-center.gap-2.overflow-hidden.overflow-x-auto.no-scrollbar
    ft-button.bg-white.rounded-xl.px-6.text-primary11(v-for='category in props.categoriesVM.items' :key="category.uuid" @click="goToCat(category.uuid, category.name)")
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

const emit = defineEmits<{
  (e: 'close'): void
}>()

const router = useRouter()

const close = () => {
  emit('close')
}

const goToCat = (path: string, name: string) => {
  router.push('/categories/' + path + '?' + name)
  setTimeout(() => {
    close()
  }, 1000)
}
</script>
