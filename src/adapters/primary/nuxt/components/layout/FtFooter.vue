<template lang="pug">
footer.bg-main.text-white.py-8
    .container.mx-auto.px-4
    .flex.flex-col.gap-12(class='lg:flex-row lg:justify-between lg:items-start').px-20
        .mb-6.flex.flex-col(class='lg:mb-0')
            h3.text-xl.font-semibold.mb-4 Suivez-nous
            .flex.space-x-4
                a(href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fpharmacieagnespraden%2F" target="_blank" aria-label="Facebook" class="hover:text-white")
                    icon.icon-xl(name="ic:outline-facebook")
                a(href="https://www.instagram.com/pharmacieagnespraden/?hl=en" target="_blank" aria-label="Instagram" class="hover:text-white")
                icon.icon-xl(name="mdi:instagram")
                a(href="https://www.tiktok.com/@pharmacieagnespraden" target="_blank" aria-label="TikTok" class="hover:text-white")
                icon.icon-xl(name="ic:baseline-tiktok")

        div.flex.flex-col
            h3.text-xl.font-semibold.mb-4 La pharmacie
            ul.space-y-2.text-white
                li
                a(href="/engagement" class="hover:text-white") Nos engagements
                li
                a(href="/garde" class="hover:text-white") Pharmacie de garde
                li
                a(href="/pharmacie" class="hover:text-white") Agnès Praden Alès
                li
                a(href="/article" class="hover:text-white") On parle de nous
                li
                a(href="/materiel-medical" class="hover:text-white") Matériel médical
        div.flex.flex-col
            h3.text-xl.font-semibold.mb-4 Informations légales
            ul.space-y-2.text-white
                li
                a(href="/cgv" class="hover:text-white") CGV
                li
                a(href="/mentions-legales" class="hover:text-white") Mentions légales
                li
                a(href="/paiement" class="hover:text-white") Paiement
                li
                a(href="/confidentialite" class="hover:text-white") Confidentialite

    .text-center.mt-8.text-white
        | 2024 Phardev - Tous droits réservés.
</template>

<script lang="ts" setup></script>

<style scoped>
/* Ajout d'un style personnalisé si besoin */
</style>
