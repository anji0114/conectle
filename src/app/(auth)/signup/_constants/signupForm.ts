import { z } from 'zod';
import { REGEX } from '@/constants/regex';

export const signupFormSchema = z.object({
  username: z.string().min(1).regex(REGEX.USERNAME),
  email: z.string().email(),
  password: z.string().min(8).regex(REGEX.PASSWORD),
});

export type SignupForm = z.infer<typeof signupFormSchema>;
