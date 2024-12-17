import { z } from 'zod';

export const offerFormSchema = z.object({
  title: z.string().min(1, { message: 'タイトルは必須です' }),
  contents: z.string().min(1, { message: '説明は必須です' }),
  project_id: z.string().min(1, { message: 'プロジェクトは必須です' }),
});

export type OfferFormType = z.infer<typeof offerFormSchema>;
