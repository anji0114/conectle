import Link from 'next/link';
import {
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';
import { buttonStyle } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

const TopPage = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-5 px-10 py-24'>
        <h1 className='text-center text-3xl font-bold leading-normal lg:text-5xl lg:leading-normal'>
          個人同士が繋がれる
          <br />
          <span className='bg-gradient-to-r from-sky-700 to-sky-500 bg-clip-text text-transparent'>
            求人プラットフォーム
          </span>
        </h1>
        <div className='flex justify-center gap-2'>
          <Link
            href='/signup'
            className={buttonStyle({
              className: 'w-[140px]',
            })}
          >
            求人を投稿する
          </Link>
          <Link
            href='/login'
            className={buttonStyle({
              variant: 'outline',
              className: 'w-[140px]',
            })}
          >
            ログイン
          </Link>
        </div>
      </div>

      <div>
        <Container>
          <div className='flex gap-8'>
            <div className='flex-1 rounded-lg border border-slate-200 p-6'>
              <div className='flex items-center gap-3'>
                <CodeBracketIcon className='size-10 text-sky-600' />
                <h3 className='text-xl font-bold'>コードレビュー</h3>
              </div>
              <p className='mt-3 text-sm text-slate-700'>
                経験豊富な開発者からフィードバックを得て、コードの品質を向上させましょう
              </p>
            </div>
            <div className='flex-1 rounded-lg border border-slate-200 p-6'>
              <div className='flex items-center gap-3'>
                <UserGroupIcon className='size-10 text-sky-600' />
                <h3 className='text-lg font-bold'>プロジェクト</h3>
              </div>
              <p className='mt-3 text-sm text-slate-700'>
                興味のあるプロジェクトに参加し、実践的な開発経験を積むことができます
              </p>
            </div>
            <div className='flex-1 rounded-lg border border-slate-200 p-6'>
              <div className='flex items-center gap-3'>
                <ChatBubbleLeftRightIcon className='size-10 text-sky-600' />
                <h3 className='text-xl font-bold'>技術的な議論</h3>
              </div>
              <p className='mt-3 text-sm text-slate-700'>
                開発者同士で技術的な議論を交わし、知見を深めることができます
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TopPage;
