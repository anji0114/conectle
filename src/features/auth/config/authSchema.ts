import { z } from 'zod';

export const authSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]+$/),
});

export type TAuthForm = z.infer<typeof authSchema>;
