import api from '../../baseServices';

const API_URL = '/header';

export const getCategories = async () => {
  const { data } = await api.get(`${API_URL}/categories`);
  return data;
};
