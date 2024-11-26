import { z } from 'zod';
import { REGEX } from '@/constants/regex';

export const initProfileFormSchema = z.object({
  username: z.string().regex(REGEX.USERNAME).min(4),
  name: z.string().min(1),
});

export type InitProfileForm = z.infer<typeof initProfileFormSchema>;
