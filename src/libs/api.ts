import axios from 'axios';
import axiosRetry from 'axios-retry';
import { rootUrl } from '@/constants/url';

export const clientApi = axios.create({
  baseURL: `${rootUrl}/api`,
  withCredentials: true,
});

export const fetcher = (url: string) =>
  clientApi.get(url).then((res) => res.data.data);

axiosRetry(clientApi, {
  retries: 2,
  retryDelay: (retryCount) => retryCount * 1000,
  retryCondition: (error) => error.response?.status === 401,
});
