'use client';

import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { useToast } from '@/components/functional/ToastProvider';
import { Loading } from '@/components/ui/Loading';
import { OfferForm } from '@/features/offers/components/OfferForm';
import { updateOffer } from '@/features/offers/services/updateOffer';
import { useProjectsMine } from '@/hooks/api/useProjectsMine';
import type { Offer } from '@/types/models/offer';
import type { OfferFormType } from '@/types/schema/offerForm';
import { offerFormSchema } from '@/types/schema/offerForm';

type Props = {
  offer: Offer;
};

export const OfferEdit: FC<Props> = ({ offer }) => {
  const router = useRouter();
  const { openToast } = useToast();
  const formMethods = useForm<OfferFormType>({
    resolver: zodResolver(offerFormSchema),
    defaultValues: {
      title: offer.title,
      contents: offer.contents,
      project_id: offer.project_id,
    },
  });
  const { data: projects, isLoading } = useProjectsMine();

  const onSubmit = async (data: OfferFormType) => {
    await updateOffer(data, offer.id);
    openToast({
      children: '募集を更新しました',
    });
    router.push(`/dashboard/offers`);
  };

  if (isLoading || !projects) return <Loading type='absolute' />;

  if (projects.length === 0) return <div>プロジェクトがありません</div>;

  return (
    <FormProvider {...formMethods}>
      <OfferForm
        projects={projects}
        disabled={formMethods.formState.isValid}
        isLoading={isLoading}
        onSubmit={formMethods.handleSubmit(onSubmit)}
        submitText='更新'
      />
    </FormProvider>
  );
};
