<template lang="pug">
button.group.flex.items-center.justify-center.p-2.transition-colors.rounded-xl(class='disabled:opacity-50 disabled:cursor-not-allowed')
    div.flex.justify-center.items-center.gap-2.transition-transform(class='group-enabled:group-active:scale-90')
        slot
</template>
