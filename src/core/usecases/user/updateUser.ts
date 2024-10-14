import { User } from '@core/types/type'
import { useUserStore } from '@store/userStore'

export const updateUser = (user: any) => {
  const userStore = useUserStore()
  userStore.update(user)
}
