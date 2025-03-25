import { CategoryDto } from '../../Dto/category.dto';
import api from '../baseServices';

const API_URL = 'admin/categories';

export const getCategories = async () => {
  const { data } = await api.get(API_URL);
  return data;
};

export const getOneCategory = async (id: string): Promise<CategoryDto> => {
  const { data } = await api.get<CategoryDto>(`${API_URL}/${id}`);
  return data;
};

export const createCategory = async (postData: CategoryDto) => {
  const { data } = await api.post<CategoryDto>(API_URL, postData);
  return data;
};

// export const updateCategory = async (
//   id: string,
//   data: Partial<CategoryDto>
// ): Promise<CategoryDto> => {
//   const { data } = await api.put<CategoryDto>(`${API_URL}/${id}`, data);
//   return response.data;
// };

// export const deleteCategory = async (
//   id: string
// ): Promise<{ message: string }> => {
//   const response = await api.delete<{ message: string }>(`${API_URL}/${id}`);
//   return response.data;
// };
