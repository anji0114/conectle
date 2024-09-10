import { z } from 'zod';

export const userUpdateSchema = z.object({
  username: z
    .string()
    .min(4)
    .regex(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]+$/),
  full_name: z.string().min(2),
});

export type TUserUpdateFormData = z.infer<typeof userUpdateSchema>;
