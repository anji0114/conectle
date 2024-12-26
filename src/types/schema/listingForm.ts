import { z } from 'zod';

export const listingFormSchema = z.object({
  title: z.string().min(1, { message: 'タイトルは必須です' }),
  contents: z.string().min(1, { message: '説明は必須です' }),
  project_id: z.string().nullable(),
});

export type ListingFormType = z.infer<typeof listingFormSchema>;
