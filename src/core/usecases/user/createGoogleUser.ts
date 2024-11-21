import { User } from '@core/types/type';
import { useUserStore } from '@store/userStore';

export const createGoogleUser = (user: any) => {
  const userStore = useUserStore();
  const name = parseName(user.displayName);
  const newUser: User = {
    id: '',
    pwd: '',
    mail: user.email,
    firstName: name.firstName,
    lastName: name.lastName,
    phoneNumber: user.phoneNumber,
    photo: user.photoURL,
    country: '',
    address: '',
    postal: '',
    appartement: '',
    city: '',
  };
  userStore.listUser(newUser);
  userStore.connect();
};

export const parseName = (fullName: string) => {
  const trimmedStr = fullName.trim();

  const spaceIndex = trimmedStr.indexOf(' ');

  const firstName = spaceIndex === -1 ? trimmedStr : trimmedStr.substring(0, spaceIndex);
  const lastName = spaceIndex === -1 ? '' : trimmedStr.substring(spaceIndex + 1);
  return { firstName, lastName };
};
