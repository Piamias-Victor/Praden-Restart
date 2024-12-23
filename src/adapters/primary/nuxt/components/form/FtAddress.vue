<template lang="pug">
TransitionRoot(appear='' :show='true' as='template')
    Dialog.relative.z-40(as='div' @close='closeModal')
        TransitionChild(as='template' enter='duration-300 ease-out' enter-from='opacity-0' enter-to='opacity-100' leave='duration-200 ease-in' leave-from='opacity-100' leave-to='opacity-0')
            div.fixed.inset-0.bg-black.bg-opacity-25
        div.fixed.inset-0.overflow-y-auto
            div.flex.min-h-full.items-center.justify-center.text-center.fixed.inset-y-0.left-0.flex.max-w-full.w-screen.max-w-md(class="md:pr-10")
                TransitionChild(as='template' class="w-full")
                    DialogPanel.flex.h-full.flex-col.overflow-y-scroll.bg-background.shadow-xl.animate-slidetop
                        div.flex-1.overflow-y-auto.py-6.px-4(class="sm:px-6")
                            div.flex.items-start.justify-between
                                h2.text-lg.font-semibold Mon profil
                                div.ml-3.flex.h-7.items-center
                                    ft-button.flex-shrink-0.bg-main.p-2.rounded-xl.text-white(@click="close")
                                        icon.icon-sm(name="ph:x-bold")
                            div.mt-4
                            h2.font-medium.text-gray-900 1 - Informations de contact
                            .mt-4
                                ft-input(
                                :value="user.mail"
                                for="email-address"
                                require
                                type='email'
                                name='email-address'
                                autocomplete='email'
                                ) 
                                    span.font-semibold.text-sm E-mail
                                div.h-6
                                ft-input(
                                for="phone"
                                require
                                type='text'
                                name='phone'
                                autocomplete='tel'
                                @input="phoneChanged"
                                ) 
                                    span.font-semibold.text-sm Téléphone
                                div.h-6
                            ft-divider.mt-3.pt-6
                            h2.font-medium.text-gray-900 2 - Informations de livraison
                            ft-address-form(
                                :user="newUser"
                                @firstname-changed="firstnameChanged"
                                @lastname-changed="lastnameChanged"
                                @country-changed="countryChanged"
                                @address-changed="addressChanged"
                                @appartement-changed="appartementChanged"
                                @city-changed="cityChanged"
                                @zip-changed="zipChanged"
                            )
                            div.mt-4
                            div.flex.items-center.gap-2.text-left
                                div(v-if='newsletter').flex.items-center.justify-center.bg-main.border.border-2.border-main.h-6.w-6.rounded-md.text-white(@click='switchNewsletter')
                                    icon.icon-xs(name="iconamoon:check-bold")
                                div(v-if='!newsletter').bg-white.border.border-2.border-main.h-6.w-6.rounded-md(@click='switchNewsletter')
                                span(@click='switchNewsletter') S'inscrire à la newsletter et recevoir toutes les offres
                            div.mt-4
                            ft-button.button-solid.w-full(@click='validateUser')
                                span.text-lg Enregistrer
</template>

<script lang="ts" setup>
import { getUserVM } from '@adapters/primary/viewModels/get-user/getUserVM';
import { createGoogleUser } from '@core/usecases/user/createGoogleUser';
import { updateUser } from '@core/usecases/user/updateUser';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue';
import { signInWithGoogle } from '@utils/google';
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const close = () => {
  emit('close');
};

function closeModal() {
  emit('close');
}

const user = computed(() => {
  return getUserVM();
});

const newsletter = ref(false);
const phone = ref('');
const firstName = ref('');
const lastName = ref('');
const country = ref('');
const postal = ref('');
const address = ref('');
const city = ref('');
const newUser = ref({
  firstName: '',
  lastName: '',
  phone: '',
  mail: user.mail,
  country: '',
  postal: '',
  address: '',
  appartement: '',
  city: '',
});

const connect = () => {
  close();
};

const switchNewsletter = () => {
  newsletter.value = !newsletter.value;
};

const firstnameChanged = (value: string) => {
  newUser.value.firstName = value;
};

const phoneChanged = (e: any) => {
  newUser.value.phone = e.target.value;
};

const lastnameChanged = (value: string) => {
  newUser.value.lastName = value;
};

const countryChanged = (value: string) => {
  newUser.value.country = value;
};

const addressChanged = (value: string) => {
  newUser.value.address = value;
};

const appartementChanged = (value: string) => {
  newUser.value.appartement = value;
};

const cityChanged = (value: string) => {
  newUser.value.city = value;
};

const zipChanged = (value: string) => {
  newUser.value.postal = value;
};

watchEffect(() => {
  if (user.value) {
    newUser.value.firstName = user.value.firstName || '';
    newUser.value.lastName = user.value.lastName || '';
    newUser.value.phone = user.value.phoneNumber || '';
    newUser.value.mail = user.value.mail || '';
    newUser.value.country = user.value.country || '';
    newUser.value.postal = user.value.postal || '';
    newUser.value.address = user.value.address || '';
    newUser.value.city = user.value.city || '';
  }
});

const validateUser = () => {
  const photo =
    user.value.photo !== ''
      ? user.value.photo
      : 'https://media1.vetsecurite.com/img/cms/BLOG/Workwear/Pr%C3%A9parateur%20pharmacie/Logo-Pharmacie.png';

  updateUser({
    firstName: newUser.value.firstName,
    lastName: newUser.value.lastName,
    phone: newUser.value.phone,
    country: newUser.value.country,
    postal: newUser.value.postal,
    address: newUser.value.address,
    appartement: newUser.value.appartement,
    city: newUser.value.city,
    mail: user.value.mail,
    uuid: user.value.uuid,
    photo,
  });
  close();
};
</script>
