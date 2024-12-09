'use client';

import { useRouter } from 'next/navigation';
import { useState, type FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { updateProject } from '@/app/projects/[projectId]/edit/_actions/updateProject';
import { ProjectForm as ProjectFormComponent } from '@/app/projects/_components/ProjectForm';
import { useToast } from '@/components/functional/ToastProvider';
import type { Project } from '@/types/models/project';
import type { ProjectForm } from '@/types/schema/projectForm';

type Props = {
  project: Project;
};

export const ProjectEdit: FC<Props> = ({ project }) => {
  const router = useRouter();
  const { openToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const formMethods = useForm<ProjectForm>({
    defaultValues: {
      title: project.title,
      contents: project.contents,
      category: project.category,
      status: project.status as ProjectForm['status'],
    },
  });

  const onUpdate = async (data: ProjectForm) => {
    setIsLoading(true);
    try {
      const response = await updateProject({ id: project.id, ...data });
      if (response.error) {
        openToast({ children: response.error, variant: 'error' });
        return;
      }

      openToast({ children: '更新しました。' });
      router.push('/dashboard/projects');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <FormProvider {...formMethods}>
        <ProjectFormComponent
          isLoading={isLoading}
          onSubmit={formMethods.handleSubmit(onUpdate)}
          submitText='更新'
        />
      </FormProvider>
    </div>
  );
};
