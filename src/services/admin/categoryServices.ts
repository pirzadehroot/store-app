import { CategoryDto } from '../../Dto/category.dto';
import api from '../baseServices';

const API_URL = 'admin/categories';

export const getCategories = async () => {
  const response = await api.get(API_URL);
  return response.data;
};

export const getOneCategory = async (id: string): Promise<CategoryDto> => {
  const response = await api.get<CategoryDto>(`${API_URL}/${id}`);
  return response.data;
};

export const createCategory = async (postData: CategoryDto) => {
  const response = await api.post<CategoryDto>(API_URL, postData);
  return response.data;
};

export const updateCategory = async (postData: CategoryDto) => {
  const response = await api.patch<CategoryDto>(
    `${API_URL}/${postData.id}`,
    postData
  );
  return response.data;
};

export const setMode = async (id: string) => {
  const response = await api.patch<{ message: string }>(
    `${API_URL}/setMode/${id}`
  );
  return response.data;
};

export const deleteCategory = async (id: string) => {
  const response = await api.delete<{ message: string }>(`${API_URL}/${id}`);
  return response.data;
};
