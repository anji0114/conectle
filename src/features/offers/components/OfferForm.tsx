import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import type { Project } from '@/types/models/project';
import type { OfferFormType } from '@/types/schema/offerForm';

type Props = {
  projects: Project[];
  disabled: boolean;
  isLoading: boolean;
  onSubmit: () => void;
  submitText: string;
};

export const OfferForm: FC<Props> = ({
  projects,
  disabled,
  isLoading,
  onSubmit,
  submitText,
}) => {
  const { register } = useFormContext<OfferFormType>();

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
          onClick={onSubmit}
          disabled={!disabled || isLoading}
          variant='base'
          className='w-full'
        >
          {isLoading ? `${submitText}中...` : submitText}
        </Button>
      </div>
    </div>
  );
};
