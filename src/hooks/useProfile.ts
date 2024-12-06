import useSWR from 'swr';
import type { Profile } from '@/types/models/profile';

export const useProfile = () => {
  return useSWR<Profile>('/profile');
};
