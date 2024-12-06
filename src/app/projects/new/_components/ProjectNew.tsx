'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { createProject } from '@/app/projects/new/_actions/createProject';
import { CategoryInput } from '@/app/projects/new/_components/CategoryInput';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

import { PROJECT_STATUS } from '@/constants/projectStatus';
import {
  projectFormSchema,
  type ProjectForm,
} from '@/types/schema/projectForm';

export const ProjectNew = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm<ProjectForm>({
    defaultValues: {
      title: '',
      contents: '',
      category: [],
      status: PROJECT_STATUS.PUBLISHED,
    },
    resolver: zodResolver(projectFormSchema),
  });

  const onSubmit = async (data: ProjectForm) => {
    setIsLoading(true);
    try {
      await createProject(data);
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className='flex gap-10'>
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
            <CategoryInput categories={field.value} onChange={field.onChange} />
          )}
        />
      </div>
      <div className='sticky top-0 w-[200px]'>
        <Button
          variant='base'
          className='w-full'
          disabled={!isValid || isLoading}
          onClick={handleSubmit(onSubmit)}
        >
          {isLoading ? '公開中...' : '公開'}
        </Button>
      </div>
    </Container>
  );
};
