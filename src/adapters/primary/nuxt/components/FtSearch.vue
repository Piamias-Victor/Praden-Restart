<template lang="pug">
TransitionRoot(appear='' :show='true' as='template')
    Dialog.relative.z-40(as='div' @close='closeModal')
        TransitionChild(as='template' enter='duration-300 ease-out' enter-from='opacity-0' enter-to='opacity-100' leave='duration-200 ease-in' leave-from='opacity-100' leave-to='opacity-0')
            div.fixed.inset-0.bg-black.bg-opacity-25
        div.fixed.inset-0.overflow-y-auto
            div.flex.items-center.justify-center.text-center.fixed.inset-y-0.right-0.flex.w-screen(class="md:")
                TransitionChild(as='template' class="w-full")
                    DialogPanel.flex.h-full.flex-col.overflow-y-scroll.bg-background.shadow-xl.animate-slideright
                        div.w-full.bg-main.text-center.p-2.text-white.font-semibold.flex.items-center.justify-center.gap-2
                            span Livraison offerte pour 69 € d'achat
                        div.py-4.px-4.flex.items-center.gap-4
                            div.bg-white.rounded-full.px-2.grow.flex.items-center.gap-4.bg-contrast
                                icon.icon-md(name="lucide:search")
                                input#search.block.border-0.placeholder-text-light.text.bg-transparent.outline-none.appearance-none(
                                    name='search'
                                    class='focus:text-default focus:outline-none sm:text-sm focus:ring-0 w-[62vw]'
                                    placeholder='Recherche'
                                    type='search'
                                    autocomplete='off'
                                    @input="searchChanged"
                                )
                            ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                                icon.icon-md(name="ph:x-bold")
                        ft-navigation
                        div.px-4(v-if='query !== ""')
                            ft-categories-search(:categoriesVM="categoriesVM" @close='close')
                        div.flex-1.overflow-y-auto.px-4(class="sm:px-6")
                            //- div.flex.items-center.gap-4
                            //-     div.bg-white.rounded-full.px-2.grow.flex.items-center.gap-4.bg-contrast
                            //-         icon.icon-md(name="lucide:search")
                            //-         input#search.block.border-0.placeholder-text-light.text.bg-transparent.outline-none.appearance-none(
                            //-             name='search'
                            //-             class='focus:text-default focus:outline-none sm:text-sm focus:ring-0 w-[62vw]'
                            //-             placeholder='Recherche'
                            //-             type='search'
                            //-             autocomplete='off'
                            //-             @input="searchChanged"
                            //-         )
                            //-     ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                            //-         icon.icon-md(name="ph:x-bold")
                            //- div(v-if='query !== ""')
                            //-     ft-categories(:categoriesVM="categoriesVM")
                            ft-product-search-list(:products="searchVM.items" @close='close')
                            nuxt-link(
                                v-if='query === ""'
                                @click="clicked").flex.flex-col.items-center.justify-center.gap-4.w-full
                                button.flex.flex-col.items-center.bg-main.text-white.rounded-sm.flex.items-center.justify-center.w-full.rounded-xl(class='h-[20vw] md:h-[8vw]')
                                    span.font-semibold.w-full.text-left.px-4 DES PROMOTIONS ALLANT JUSQU'À -30%
                                button.flex.flex-col.items-center.justify-center.bg-cover.bg-center.rounded-sm.flex.items-center.justify-center.w-full.rounded-xl(class='h-[20vw] md:h-[8vw]' style="background-image: url('https://i.postimg.cc/kMtWv1gV/new.png')")
                                    span.font-semibold.w-full.text-left.px-4 DERMOCOSMETIQUE
                                button.flex.flex-col.items-center.justify-center.bg-cover.bg-center.rounded-sm.flex.items-center.justify-center.w-full.rounded-xl(class='h-[20vw] md:h-[8vw]' style="background-image: url('https://i.postimg.cc/vDFr59VS/1.png')")
                                    span.font-semibold.w-full.text-left.px-4 MAMAN & BEBE
                                button.flex.flex-col.items-center.justify-center.bg-cover.bg-center.rounded-sm.flex.items-center.justify-center.w-full.rounded-xl(class='h-[20vw] md:h-[8vw]' style="background-image: url('https://i.postimg.cc/1zkwkwWR/56.png')")
                                    span.font-semibold.w-full.text-left.px-4 NATURE & SANTE
                                button.flex.flex-col.items-center.justify-center.bg-cover.bg-center.rounded-sm.flex.items-center.justify-center.w-full.rounded-xl(class='h-[20vw] md:h-[8vw]' style="background-image: url('https://i.postimg.cc/5yBnS04L/009.png')")
                                    span.font-semibold.w-full.text-left.px-4 COMPLEMENT
                                button.flex.flex-col.items-center.justify-center.bg-cover.bg-center.rounded-sm.flex.items-center.justify-center.w-full.rounded-xl(class='h-[20vw] md:h-[8vw]' style="background-image: url('https://i.postimg.cc/Bvb7f4pf/10.png')")
                                    span.font-semibold.w-full.text-left.px-4 VETERINAIRE
                                button.flex.flex-col.items-center.justify-center.bg-cover.bg-center.rounded-sm.flex.items-center.justify-center.w-full.rounded-xl(class='h-[20vw] md:h-[8vw]' style="background-image: url('https://i.postimg.cc/G3T0sJkn/09.png')")
                                    span.font-semibold.w-full.text-left.px-4 COFFRET CADEAU
</template>

<script lang="ts" setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel
} from '@headlessui/vue'
import { searchGateway } from '../../../../../gateways/searchGateway'
import { searchProduct } from '@core/usecases/search-product/searchProduct'
import { getSearchResultVM } from '@adapters/primary/viewModels/get-search-result/getSearchResultVM'
import { getRootCategoriesVM } from '@adapters/primary/viewModels/get-category/getRootCategoriesVM'
import { getSearchCategoriesVM } from '@adapters/primary/viewModels/get-category/getSearchCategoryVM'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => {
  console.log('ici ici')
  emit('close')
}

function closeModal() {
  emit('close')
}

const query = ref('')
let debounceTimeout: ReturnType<typeof setTimeout> | null = null

const categoriesVM = computed(() => {
  return getSearchCategoriesVM(query.value)
})

const searchChanged = (e: any) => {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout)
  }
  query.value = e.target.value
  debounceTimeout = setTimeout(() => {
    searchProduct(query.value, searchGateway())
  }, 500)
}

const searchVM = computed(() => {
  return getSearchResultVM()
})
</script>
