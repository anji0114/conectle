'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { ProjectForm } from '@/app/projects/_components/ProjectForm';
import { createProject } from '@/app/projects/new/_actions/createProject';

import { PROJECT_STATUS } from '@/constants/projectStatus';
import {
  projectFormSchema,
  type ProjectForm as ProjectFormType,
} from '@/types/schema/projectForm';

export const ProjectNew = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const formMethods = useForm<ProjectFormType>({
    defaultValues: {
      title: '',
      contents: '',
      category: [],
      status: PROJECT_STATUS.PUBLISHED,
    },
    resolver: zodResolver(projectFormSchema),
  });

  const onSubmit = async (data: ProjectFormType) => {
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
    <FormProvider {...formMethods}>
      <ProjectForm
        submitText='公開'
        isLoading={isLoading}
        onSubmit={formMethods.handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
};
