<template lang="pug">
    ft-navigation
    div.mt-6
    div.flex.flex-col.items-center
        img.block.h-48.w-auto(
            class="sm:h-[30vw]"
            src="https://icon-library.com/images/canceled-icon/canceled-icon-4.jpg"
            alt="logo"
            )
        div.mt-6
        span.font-semibold.text-xl.text-center Une erreur est survenue lors du traitement de votre commande.
        div.mt-2
        span.px-4.font-semibold.text-contrast.text-center Veuillez réessayer ultérieurement ou contactez notre support
        div.mt-6
        ft-button.button-solid.w-full.text-xl(@click="backToHome" class='sm:w-[30vw]') Retourner sur le site
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'main' });

const router = useRouter();

const backToHome = () => {
  router.push('/');
};
</script>
