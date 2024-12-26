'use client';

import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { useToast } from '@/components/functional/ToastProvider';
import { Loading } from '@/components/ui/Loading';
import { ListingForm } from '@/features/listings/components/ListingForm';
import { updateListing } from '@/features/listings/services/updateListing';
import { useProjectsMine } from '@/hooks/api/useProjectsMine';
import type { Listing } from '@/types/models/listing';
import type { ListingFormType } from '@/types/schema/listingForm';
import { listingFormSchema } from '@/types/schema/listingForm';

type Props = {
  listing: Listing;
  userId: string;
};

export const ListingEdit: FC<Props> = ({ listing }) => {
  const router = useRouter();
  const { openToast } = useToast();
  const formMethods = useForm<ListingFormType>({
    resolver: zodResolver(listingFormSchema),
    defaultValues: {
      title: listing.title,
      contents: listing.contents,
      project_id: listing.project_id,
    },
  });
  const { data: projects, isLoading } = useProjectsMine();

  const onSubmit = async (data: ListingFormType) => {
    await updateListing(data, listing.id);
    openToast({
      children: '募集を更新しました',
    });
    router.push(`/dashboard/listings`);
  };

  if (isLoading || !projects) return <Loading type='absolute' />;

  if (projects.length === 0) return <div>プロジェクトがありません</div>;

  return (
    <FormProvider {...formMethods}>
      <ListingForm
        projects={projects}
        disabled={formMethods.formState.isValid}
        isLoading={isLoading}
        onSubmit={formMethods.handleSubmit(onSubmit)}
        submitText='更新'
      />
    </FormProvider>
  );
};
