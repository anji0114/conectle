'use client';

import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/functional/ToastProvider';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Loading } from '@/components/ui/Loading';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { createOffer } from '@/features/offers/services/createOffer';
import { useProjectsMine } from '@/hooks/api/useProjectsMine';
import { offerFormSchema, type OfferForm } from '@/types/schema/offerForm';

export const OfferNewContents = () => {
  const router = useRouter();
  const { openToast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<OfferForm>({
    resolver: zodResolver(offerFormSchema),
    defaultValues: {
      title: '',
      contents: '',
      project_id: '',
    },
  });
  const { data: projects, isLoading } = useProjectsMine();

  const onSubmit = async (data: OfferForm) => {
    await createOffer(data);
    openToast({
      children: '募集を作成しました',
    });
    router.push(`/dashboard/offers`);
  };

  if (isLoading || !projects) return <Loading type='absolute' />;
  if (projects.length === 0) return <div>プロジェクトがありません</div>;

  return (
    <div className='flex gap-10'>
      <div className='flex-1 space-y-6 rounded-xl border border-slate-200 bg-white p-6'>
        <div>
          <Input
            variant='fill'
            placeholder='タイトル'
            className='font-bold'
            {...register('title')}
          />
        </div>
        <div>
          <Textarea
            variant='fill'
            minRows={12}
            placeholder={'募集の説明\nマークダウン'}
            {...register('contents')}
          />
        </div>
        <div>
          <Select variant='fill' {...register('project_id')}>
            <option value='' disabled>
              選択してください
            </option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))}
          </Select>
        </div>
      </div>
      <div className='sticky top-0 w-[200px]'>
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
          variant='base'
          className='w-full'
        >
          公開
        </Button>
      </div>
    </div>
  );
};
