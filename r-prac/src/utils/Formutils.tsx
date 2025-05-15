// every value will be check whether it is correct or not   through the utils rules notified by this file

export const validateEmail = (email:string): boolean  =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validatePassword = (pass:string): boolean =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(pass);

export const validatePhone = (phone:string ): boolean =>
 /^[6-9]\d{9}$/.test(phone);

export const required = (val:string ): boolean => val.trim() !== '';
