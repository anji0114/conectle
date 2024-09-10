import { QUERY_KEYS } from '@/configs/queryKeys';
import { TUser } from '@/types/user';
import { useQuery } from '@tanstack/react-query';

const fetchUser = async (): Promise<TUser> => {
  try {
    const response = await fetch('/api/v1/user');
    const json: { message: string; data: TUser } = await response.json();
    return json.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const useUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER.FETCH_DETAIL],
    queryFn: () => {
      return fetchUser();
    },
  });
};
