import type { FC } from 'react';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Controller, useFieldArray, type Control } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { IconButton } from '@/components/ui/IconButton';
import { Input } from '@/components/ui/Input';
import type { ProfileForm } from '@/features/setting/profile/constants/profileForm';

type Props = {
  control: Control<ProfileForm>;
};

export const SettingProfileLinks: FC<Props> = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'links',
  });

  return (
    <div>
      <div className='space-y-2'>
        {fields.map((field, index) => (
          <div
            key={field.id}
            className='flex items-center gap-4 border-t border-slate-200 pt-2 first-of-type:border-t-0 first-of-type:pt-0'
          >
            <div className='flex flex-1 gap-2'>
              <Controller
                control={control}
                name={`links.${index}.name`}
                render={({ field }) => (
                  <Input
                    className='w-[240px]'
                    variant='fill'
                    placeholder='Github'
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name={`links.${index}.url`}
                render={({ field }) => (
                  <Input
                    className='flex-1'
                    variant='fill'
                    placeholder='https://github.com/example'
                    {...field}
                  />
                )}
              />
            </div>
            <IconButton onClick={() => remove(index)} className='size-8'>
              <TrashIcon className='size-4' />
            </IconButton>
          </div>
        ))}
      </div>
      <div className='mt-4'>
        <Button
          onClick={() => append({ url: '', name: '' })}
          className='w-full'
          variant='outline'
        >
          <PlusIcon className='size-4' />
          入力エリアの追加
        </Button>
      </div>
    </div>
  );
};
