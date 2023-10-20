export interface registrationData extends authData {
  confirmPassword: string;
}
export interface authData {
  username: string;
  password: string;
}
