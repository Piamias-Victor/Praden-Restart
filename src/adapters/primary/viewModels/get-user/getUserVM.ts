import { User } from '@core/types/type'
import { useUserStore } from '@store/userStore'

export const getUserVM = (): User => {
  const userStore = useUserStore()
  const user = userStore.user
  return user
}
