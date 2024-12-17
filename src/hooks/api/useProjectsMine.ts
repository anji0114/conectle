import useSWR from 'swr';
import type { Project } from '@/types/models/project';

export const useProjectsMine = () => {
  return useSWR<Project[]>('/projects/mine');
};
