<template lang="pug">
TransitionRoot(appear='' :show='true' as='template')
    Dialog.relative.z-40(as='div' @close='closeModal')
        TransitionChild(as='template' enter='duration-300 ease-out' enter-from='opacity-0' enter-to='opacity-100' leave='duration-200 ease-in' leave-from='opacity-100' leave-to='opacity-0')
            div.fixed.inset-0.bg-black.bg-opacity-25
        div.fixed.inset-0.overflow-y-auto
            div.flex.min-h-full.items-center.justify-center.text-center.fixed.inset-y-0.right-0.flex.max-w-full.w-screen.max-w-md(class="md:pl-10")
                TransitionChild(as='template' class="w-full")
                    DialogPanel.flex.h-full.flex-col.overflow-y-scroll.bg-background.shadow-xl.animate-slideright
                      ft-filter(:facetsVM="facetsVM" @close="closeCart" @sortBy="sortBy" @searchLaboratory="searchLaboratory" @searchCategory="searchCategory" :sortType="sortType")  
</template>

<script lang="ts" setup>
import { getCartQuantityVM } from '@adapters/primary/viewModels/get-quantity-in-cart/getQuantityInCartVm'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel
} from '@headlessui/vue'
import { useProductGateway } from '../../../../../gateways/productGateway'
import { getCartVM } from '@adapters/primary/viewModels/get-cart/getCartVM'
import { removeAllFromCart } from '@core/usecases/remove-from-cart/RemoveAllFromCart'
const props = defineProps<{
  facetsVM: any
  sortType: any
}>()

const router = useRouter()

const cartQuantity = ref<CartQuantityVM | null>(null)

const stepper = ref(0)

const moveStepper = () => {
  stepper.value += 1
}

const closeCart = () => {
  closeModal()
}

const cart = computed(() => {
  return getCartVM()
})

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'sortBy', st: number): void
  (e: 'searchLaboratory', labo: string | null): void
  (e: 'searchCategory', cat: string | null): void
  (e: 'move-stepper'): void
}>()

const close = () => {
  emit('close')
}

const sortBy = (st: number) => {
  emit('sortBy', st)
}

const searchLaboratory = (labo: string | null) => {
  emit('searchLaboratory', labo)
}

const searchCategory = (cat: string | null) => {
  console.log('cat2', cat)
  emit('searchCategory', cat)
  close()
}

function closeModal() {
  emit('close')
}

watchEffect(async () => {
  cartQuantity.value = await getCartQuantityVM(useProductGateway())
})
</script>
