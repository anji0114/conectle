import { z } from 'zod';
import { PROJECT_STATUS } from '@/constants/projectStatus';

export const projectFormSchema = z.object({
  title: z.string().min(1),
  contents: z.string().min(1),
  category: z.array(z.string()).min(1),
  status: z.nativeEnum(PROJECT_STATUS),
});

export type ProjectForm = z.infer<typeof projectFormSchema>;
