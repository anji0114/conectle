import { z } from 'zod';
import { REGEX } from '@/constants/regex';

export const profileFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'ユーザー名を入力してください' })
    .regex(REGEX.USERNAME),
  name: z.string().min(1, { message: '名前を入力してください' }),
  introduce: z.string(),
});

export type ProfileForm = z.infer<typeof profileFormSchema>;
