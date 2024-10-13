import { User } from '@core/types/type'
import { useUserStore } from '@store/userStore'

export const createGoogleUser = (user: any) => {
  const userStore = useUserStore()
  const newUser: User = {
    id: 'google',
    pwd: 'google',
    name: user.displayName,
    phoneNumber: user.phoneNumber,
    photo: user.photoURL
  }
  userStore.listUser(newUser)
  userStore.connect()
}
