<template lang="pug">
section.px-2
    div.flex.items-center.justify-center.py-2
      span.text-2xl.font-bold.text-center(class='lg:text-3xl') Suivez nos actus
    div.h-2
    div.px-4.grid.grid-cols-1.gap-8(class='lg:grid-cols-2 gap-8')
      div.flex.flex-col.gap-2
        iframe.block.rounded-xl.w-full(
            src="https://www.instagram.com/p/DBBZfFFIB1g/embed" 
            width="400" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          )
        a(href='https://www.instagram.com/pharmacieagnespraden/?hl=en' target='_blank' rel='noopener noreferrer') 
          ft-button.button-solid.w-full
              span Suivez nous sur instagram
              icon.icon-md(name="akar-icons:send")
      div.flex.flex-col.gap-2
        iframe.block.rounded-xl.w-full(
          src='https://www.tiktok.com/embed/v2/7227902361333697819'
          width="400" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        )
        a(href='https://www.tiktok.com/@pharmacieagnespraden' target='_blank' rel='noopener noreferrer')
          ft-button.button-solid.w-full
              span Suivez nous sur TikTok
              icon.icon-md(name="akar-icons:send")
</template>
