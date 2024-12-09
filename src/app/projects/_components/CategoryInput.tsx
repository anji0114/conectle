import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

type Props = {
  categories: string[];
  onChange: (categories: string[]) => void;
};

export const CategoryInput = ({ categories, onChange }: Props) => {
  const [inputCategory, setInputCategory] = useState('');

  const handleAddCategory = () => {
    if (inputCategory.trim() === '' || categories.includes(inputCategory)) {
      return;
    }
    onChange([...categories, inputCategory]);
    setInputCategory('');
  };

  const handleRemoveCategory = (category: string) => {
    onChange(categories.filter((c) => c !== category));
  };

  return (
    <div className='flex flex-col gap-2'>
      {categories.length > 0 && (
        <div className='flex flex-wrap items-center gap-1'>
          {categories.map((category, index) => (
            <span
              key={index}
              className='inline-flex items-center gap-[2px] rounded-sm border border-slate-200 px-3 py-1.5 text-sm'
            >
              <span className='leading-none'>{category}</span>
              <button
                className='text-slate-500 hover:text-slate-800'
                onClick={() => handleRemoveCategory(category)}
              >
                <XMarkIcon className='size-4' strokeWidth={2} />
              </button>
            </span>
          ))}
        </div>
      )}
      <div className='flex items-center gap-2'>
        <Input
          variant='fill'
          placeholder='カテゴリ名'
          className='flex-1'
          value={inputCategory}
          onChange={(e) => setInputCategory(e.target.value)}
        />
        <Button
          variant='outline'
          onClick={handleAddCategory}
          disabled={inputCategory.trim() === ''}
        >
          追加
        </Button>
      </div>
    </div>
  );
};
