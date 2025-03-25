import axios from 'axios';
import { toast } from 'react-toastify';

export const apiBaseUrl = 'http://localhost:8000/';

const api = axios.create({
  baseURL: apiBaseUrl,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 404) {
        toast.warning('صفحه یافت نشد!');
      } else if (error.response.status === 500) {
        toast.error('خطای سرور!');
      } else {
        toast.error('خطای دیگری رخ داده است!');
      }
    } else {
      toast.error('مشکل در ارتباط با سرور');
    }
  }
);

export default api;
