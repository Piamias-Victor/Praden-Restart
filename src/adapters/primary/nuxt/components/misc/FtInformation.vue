<template lang="pug">
section.px-2.hidden(class='sm:block')
    div.flex.items-center.justify-center.py-2
      span.text-2xl.font-bold.text-center(class='lg:text-3xl') La Pharmacie
    div.h-2
    div.px-4
      iframe.block.rounded-xl.w-full(
        width="560"
        height="560"
        src="https://www.youtube.com/embed/zLmfyGVF2h0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      )
    div.h-4
    div.px-4.flex.items-center.justify-between.gap-8
      iframe.block.rounded-xl.w-full(
        width="300"
        height="450"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2863.3004215310857!2d4.090225176285041!3d44.13905002087236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b442f4ce2394b9%3A0xb65c3289906ec27e!2sPharmacie%20Agn%C3%A8s%20Praden%20Al%C3%A8s!5e0!3m2!1sfr!2sfr!4v1729244211496!5m2!1sfr!2sfr"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      )
</template>
