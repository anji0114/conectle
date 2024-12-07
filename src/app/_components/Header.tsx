import Link from 'next/link';
import { CodeBracketSquareIcon } from '@heroicons/react/16/solid';
import { HeaderLoginContents } from '@/app/_components/HeaderLoginContents';
import { HeaderLogoutContents } from '@/app/_components/HeaderLogoutContents';
import { createSupabaseServer } from '@/utils/supabase/server';

export const Header = async () => {
  const supabase = createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className='border-b border-slate-200 px-10'>
      <div className='flex h-16 items-center justify-between'>
        <h1 className='text-slate-800'>
          <Link href='/' className='flex items-center gap-1'>
            <CodeBracketSquareIcon className='size-8' />
            <span className='pb-px text-xl font-bold leading-none'>
              Conectle
            </span>
          </Link>
        </h1>
        <div className='ml-auto'>
          {!user ? <HeaderLogoutContents /> : <HeaderLoginContents />}
        </div>
      </div>
    </header>
  );
};
