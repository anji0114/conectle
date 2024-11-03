import { z } from 'zod';

export const signupFormSchema = z.object({
  username: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

export type SignupForm = z.infer<typeof signupFormSchema>;
