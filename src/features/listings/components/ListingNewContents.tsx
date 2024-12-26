'use client';

import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { useToast } from '@/components/functional/ToastProvider';
import { Loading } from '@/components/ui/Loading';
import { ListingForm } from '@/features/listings/components/ListingForm';
import { createListing } from '@/features/listings/services/createListing';
import { useProjectsMine } from '@/hooks/api/useProjectsMine';
import {
  listingFormSchema,
  type ListingFormType,
} from '@/types/schema/listingForm';

type Props = {
  userId: string;
};

export const ListingNewContents: FC<Props> = ({ userId }) => {
  const router = useRouter();
  const { openToast } = useToast();
  const formMethods = useForm<ListingFormType>({
    resolver: zodResolver(listingFormSchema),
    defaultValues: {
      title: '',
      contents: '',
      project_id: null,
    },
  });
  const { data: projects, isLoading } = useProjectsMine();

  const onSubmit = async (data: ListingFormType) => {
    await createListing(data, userId);
    openToast({
      children: '募集を作成しました',
    });
    router.push(`/dashboard/listings`);
  };

  if (isLoading || !projects) return <Loading type='absolute' />;

  return (
    <FormProvider {...formMethods}>
      <ListingForm
        projects={projects}
        disabled={formMethods.formState.isValid}
        isLoading={isLoading}
        onSubmit={formMethods.handleSubmit(onSubmit)}
        submitText='公開'
      />
    </FormProvider>
  );
};
