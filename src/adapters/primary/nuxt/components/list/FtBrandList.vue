<template lang="pug">
section.px-2
    div.flex.items-center.justify-center.py-2
        span.text-2xl.font-bold.text-center(class='lg:text-3xl') La sélection de marque
    ft-laboratory
    div.h-2
    div.flex.items-center.justify-center
        ft-button.button-solid.text-xl.px-8(@click='goToLabo')
            span Voir toutes les marques
            icon.icon-md(name='bx:category')
</template>

<script lang="ts" setup>
const router = useRouter()

const goToLabo = async () => {
  router.push('/laboratory')
}
</script>
