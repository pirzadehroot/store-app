import { toast } from 'react-toastify';

export const apiBaseUrl = 'http://localhost:8000/';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetchOptions {
  method?: Method;
  headers?: Record<string, string>;
  body?: any;
  token?: string;
}

export const apiFetch = async (
  endpoint: string,
  options: FetchOptions = {}
) => {
  const { method = 'GET', body, token, headers = {} } = options;

  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  };

  try {
    const res = await fetch(apiBaseUrl + endpoint, fetchOptions);

    const contentType = res.headers.get('Content-Type');
    const isJson = contentType && contentType.includes('application/json');
    const data = isJson ? await res.json() : null;

    if (!res.ok) {
      const message = data?.message;

      if (res.status === 404) {
        toast.warning('سرویسی پیدا نشد!');
      } else if (res.status === 500) {
        toast.error('خطای سرور!');
      } else {
        toast.error(message || 'خطایی رخ داده است.');
      }

      throw new Error(message || 'خطایی رخ داده است.');
    }

    return data;
  } catch (err) {
    toast.error('مشکل ارتباط با سرور');
    throw err;
  }
};
