import Link from 'next/link';
import type { FC } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import { Controller, useFormContext } from 'react-hook-form';
import { CategoryInput } from '@/app/projects/_components/CategoryInput';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import type { ProjectForm as ProjectFormType } from '@/types/schema/projectForm';

type Props = {
  isLoading: boolean;
  onSubmit: () => void;
  submitText: string;
};

export const ProjectForm: FC<Props> = ({ isLoading, onSubmit, submitText }) => {
  const {
    register,
    control,
    formState: { isValid, isDirty },
  } = useFormContext<ProjectFormType>();

  return (
    <Container>
      <div>
        <Link
          href='/dashboard/projects'
          className='flex w-fit items-center gap-2 text-slate-500 hover:text-slate-800'
        >
          <ArrowLeftIcon className='size-3' strokeWidth={2} />
          <span className='text-sm'>プロジェクト一覧へ</span>
        </Link>
      </div>
      <div className='mt-6 flex gap-10'>
        <div className='flex-1 space-y-6 rounded-xl border border-slate-200 bg-white p-6'>
          <div>
            <Input
              className='font-bold'
              variant='fill'
              placeholder='プロジェクト名'
              {...register('title')}
            />
          </div>
          <div>
            <Textarea
              variant='fill'
              minRows={12}
              placeholder={'プロジェクトの説明\nマークダウン'}
              {...register('contents')}
            />
          </div>
          <Controller
            control={control}
            name='category'
            render={({ field }) => (
              <CategoryInput
                categories={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <div className='sticky top-0 w-[200px]'>
          <Button
            variant='base'
            className='w-full'
            disabled={!isValid || !isDirty || isLoading}
            onClick={onSubmit}
          >
            {isLoading ? `${submitText}中...` : submitText}
          </Button>
        </div>
      </div>
    </Container>
  );
};
