'use client';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createCategory,
  getOneCategory,
  deleteCategory,
  setMode,
  updateCategory,
  getCategoriesFetch,
} from '../../../services/admin/categoryServices';
import { CategoryDto } from '../../../Dto/category.dto';

export const useGetCategories = () => {
  const { data, isLoading, isError, error } = useQuery<CategoryDto[]>({
    queryKey: ['categories'],
    queryFn: getCategoriesFetch,
  });

  return { data, isLoading, isError, error };
};

export const useGetOneCategory = (id: string) => {
  const { data, isLoading, isError, error } = useQuery<CategoryDto>({
    queryKey: ['Category', id],
    queryFn: () => getOneCategory(id),
  });

  return { data, isLoading, isError, error };
};

export const useCreateCategory = () => {
  const { mutate, isError, isSuccess, reset } = useMutation({
    mutationFn: (category: CategoryDto) => createCategory(category),
    mutationKey: ['createCategory'],
  });
  return { mutate, isError, isSuccess, reset };
};

export const useUpdateCategory = (id: string) => {
  const { mutate, isPending, isError, isSuccess, reset, error } = useMutation({
    mutationFn: (category: CategoryDto) => updateCategory(id, category),
  });

  return { mutate, isPending, isError, isSuccess, reset, error };
};

export const useSetModeCategory = () => {
  const { mutate, isError, isSuccess, reset } = useMutation({
    mutationFn: (id: string) => setMode(id),
  });

  return { mutate, isError, isSuccess, reset };
};

export const useDeleteCategory = () => {
  const { mutate, isError, isSuccess, reset } = useMutation({
    mutationFn: (id: string) => deleteCategory(id),
  });

  return { mutate, isError, isSuccess, reset };
};
