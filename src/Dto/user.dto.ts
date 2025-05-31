export interface UserDto {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  isActive: boolean;
  isAdmin: boolean;
  activation_tokens: string;
  isBan: boolean;
  created_at: Date;
  updated_at: Date;
}
