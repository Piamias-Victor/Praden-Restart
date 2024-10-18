<template lang="pug">
nav.flex.items-center.justify-center.p-2.px-9
    div.flex.gap-2
        ft-button.bg-white.rounded-full(@click="openProfil")
            icon.icon-md.text-main(name="material-symbols:supervised-user-circle-outline")
            span.text-main.font-semibold.hidden(class='sm:block') Mon Profil
    div.flex.items-center.justify-center.gap-1.grow.px-2
        nuxt-link(
            href="/"
            @click="clicked"
            )
          img.block.h-9.w-auto(
                  src="https://www.pharma365.fr/wp-content/uploads/2023/11/logo_Pharmabest.png"
                  alt="logo"
                  )
    div.flex.items-center.justify-end.gap-2
        ft-button.bg-white.rounded-full(@click="startSearch")
            span.text-main.font-semibold.hidden(class='sm:block') Recherche
            icon.icon-md.text-main(name="lucide:search")

ft-profil(v-if="profilOpened" @close="closeProfil")
ft-search(v-if="searchOpened" @close="closeSearch")
</template>

<script lang="ts" setup>
import { getRootCategoriesVM } from '@adapters/primary/viewModels/get-category/getRootCategoriesVM';

const profilOpened = ref(false)
const searchOpened = ref(false)

const categoriesVM = computed(() => {
  return getRootCategoriesVM()
})

const openProfil = () => {
  profilOpened.value = true
}

const closeProfil = () => {
  profilOpened.value = false
}

const startSearch = () => {
  searchOpened.value = true
}

const closeSearch = () => {
  searchOpened.value = false
}
</script>
