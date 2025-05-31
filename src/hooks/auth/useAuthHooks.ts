'use client';
import { UserLoginDto } from '@/app/(auth)/login/page';
import { UserRegisterDto } from '@/app/(auth)/register/page';
import {
  loginService,
  registerService,
  userActiveService,
} from '@/services/auth/authServices';
import { useMutation } from '@tanstack/react-query';

export const useRegister = () => {
  const { mutate, isError, isSuccess, reset } = useMutation({
    mutationKey: ['userRigister'],
    mutationFn: (registerData: UserRegisterDto) =>
      registerService(registerData),
  });
  return { mutate, isError, isSuccess, reset };
};

export const useLogin = () => {
  const { mutate, isError, isSuccess, reset } = useMutation({
    mutationKey: ['userLogin'],
    mutationFn: (loginData: UserLoginDto) => loginService(loginData),
  });
  return { mutate, isError, isSuccess, reset };
};

export const useActive = () => {
  const { mutate } = useMutation({
    mutationKey: ['user-active'],
    mutationFn: (token: string) => userActiveService(token),
  });
  return { mutate };
};
