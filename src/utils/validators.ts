export const isEmailValid = (email: string): boolean => {
  const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regexMail.test(email);
};

export const isPhoneValid = (phone: string): boolean => {
  const regexPhone = /^(?:\+33|0)[1-9](?:[\s.-]?\d{2}){4}$/;
  return regexPhone.test(phone);
};
