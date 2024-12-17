'use client';

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

export const ProjectsNew = () => {
  return (
    <Container className='flex gap-10'>
      <div className='flex-1 space-y-6 rounded-xl border border-slate-200 bg-white p-6'>
        <div>
          <Input
            className='font-bold'
            variant='fill'
            placeholder='プロジェクト名'
          />
        </div>
        <div>
          <Textarea
            variant='fill'
            minRows={12}
            placeholder={'プロジェクトの説明\nマークダウン'}
          />
        </div>
        <div>
          <Input placeholder='カテゴリ' />
          <Button variant=''>追加</Button>
        </div>
      </div>
      <div className='sticky top-0 w-[200px]'>
        <Input placeholder='カテゴリ' />
      </div>
    </Container>
  );
};
