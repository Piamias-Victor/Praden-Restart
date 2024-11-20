<template lang="pug">
section.px-2.hidden(class='sm:block')
  div.flex.items-center.justify-center.py-2
    span.text-2xl.font-bold.text-center(class='lg:text-3xl') Avis
  section.p-2.flex.flex-col.items-center.w-full.gap-4.px-6
    div.bg-white.rounded-xl.p-4.w-full.flex.items-center.gap-4(class='transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl')
      img.flex.items-center.justify-center.rounded-full.bg-contrast.border.border-main.border-2(class="w-[50px]" src="https://i.postimg.cc/8ccmrhg2/woman-1.png")
      div.flex.flex-col.gap-2
        div.flex.items-center.gap-1
          icon.icon-md.text-main(name="ph:star-fill")
          icon.icon-md.text-main(name="ph:star-fill")
          icon.icon-md.text-main(name="ph:star-fill")
          icon.icon-md.text-main(name="ph:star-fill")
          icon.icon-md.text-main(name="ph:star-fill")
        span Envoie super rapide, qualité au top ! Je recommande
    div.bg-white.rounded-xl.p-4.w-full.flex.items-center.gap-4(class='transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl')
      img.flex.items-center.justify-center.rounded-full.bg-contrast.border.border-main.border-2(class="w-[50px]" src="https://i.postimg.cc/kGYwjTyM/woman.png")
      div.flex.flex-col.gap-2
        div.flex.items-center.gap-1
          icon.icon-md.text-main(name="ph:star-fill")
          icon.icon-md.text-main(name="ph:star-fill")
          icon.icon-md.text-main(name="ph:star-fill")
          icon.icon-md.text-main(name="ph:star-fill")
          icon.icon-md.text-white(name="ph:star-fill")
        span Service client très réactif et à l'écoute. Je recommande vivement !
    div.bg-white.rounded-xl.p-4.w-full.flex.items-center.gap-4(class='transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl')
      img.flex.items-center.justify-center.rounded-full.bg-contrast.border.border-main.border-2(class="w-[50px] h-[50px]" src="https://i.postimg.cc/nr3SyFnJ/profile.png")
      div.flex.flex-col.gap-2
        div.flex.items-center.gap-1
          icon.icon-md.text-main(name="ph:star-fill")
          icon.icon-md.text-main(name="ph:star-fill")
          icon.icon-md.text-main(name="ph:star-fill")
          icon.icon-md.text-main(name="ph:star-fill")
          icon.icon-md.text-main(name="ph:star-fill")
        span Livraison rapide et produits conformes à la description. Très satisfait !
</template>
