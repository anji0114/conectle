import useSWR from 'swr';
import type { Profile } from '@/types/database/profile';

export const useProfile = () => {
  return useSWR<Profile>('/profile');
};
