<template lang="pug">
div.px-2.fixed.z-50.top-16.right-2.flex.flex-col.gap-2(class="w-[96vw] lg:w-[35vw]" v-if='notifications.length > 0')
    div.flex.w-full.flex-col.items-center.z-50(
        v-for='(notification, index) in notifications'
        :key='index'
        class='sm:items-end'
    )
        div.w-full.max-w-sm.overflow-hidden.rounded-lg.shadow-lg.bg-white.border.border-grass9
            div.p-4
                div.flex.items-start
                    div.flex-shrink-0
                    div.ml-3.w-0.flex-1(class='pt-0.5')
                        p.text-sm.font-semibold(:class="colorMap[notification.type]") {{ notification.name }}
                        p.mt-1.text-sm.text-contrast {{ notification.msg }}
                    button.flex-shrink-0(@click="dismissNotification(index)")
                        icon.icon-sm(name="ph:x-bold")
</template>

<script lang="ts" setup>
import {
  getNotificationsVM,
  NotificationType
} from '@adapters/primary/viewModels/get-notifications/getNotification'
import { removeNotification } from '@core/usecases/remove-notification/removeNotification'

const colorMap = {
  [NotificationType.Success]: 'text-success',
  [NotificationType.Error]: 'text-error'
}

const notifications = computed(() => {
  const data = getNotificationsVM();
  console.log('Notifications:', data); // Vérifie la structure des données ici
  return data.notifications || []; // Assure-toi que tu renvoies un tableau
});

const dismissNotification = (index: number) => {
  removeNotification(index);
}
</script>
