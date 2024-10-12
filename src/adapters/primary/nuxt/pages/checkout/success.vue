<template lang="pug">
ft-header
div.mt-6
div.flex.flex-col.items-center
    img.block.h-48.w-auto(
        class="sm:h-[30vw]"
        src="https://ep-website-media.s3.ap-southeast-1.amazonaws.com/my/wp-content/uploads/2024/04/truck-full-of-parcels.webp"
        alt="logo"
        )
    span.font-semibold.text-xl Votre commande est en route!
    div.mt-2
    span.px-4.font-semibold.text-contrast.text-center Toute l'équipe de la pharmacie vous remercie et met tout en oeuvre pour vous offrir un service de qualité.
    div.mt-6
    ft-button.button-solid.w-full.text-xl(@click="backToHome" class='sm:w-[30vw]') Retourner sur le site
    div.mt-6
    ft-button.bg-contrast.w-full.text-xl(@click="backToHome" class='sm:w-[30vw]') Voir le suivi de la commande
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'main' })

const router = useRouter()

const backToHome = () => {
  router.push('/')
}
</script>
