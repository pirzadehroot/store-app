import axios from 'axios';
import { toast } from 'react-toastify';

export const apiBaseUrl = 'http://localhost:8000/';

const api = axios.create({
  baseURL: apiBaseUrl,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data?.message;

      if (status === 404) {
        toast.warning('سرویسی پیدا نشد!');
      } else if (status === 500) {
        toast.error('خطای سرور!');
      } else {
        toast.error(message || 'خطایی رخ داده است.');
      }
    } else {
      toast.error('مشکل ارتباط با سرور');
    }

    return Promise.reject(error);
  }
);

export default api;
