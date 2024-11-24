import Link from 'next/link';
import { buttonVariants } from '@/components/ui/Button';

const TopPage = () => {
  return (
    <div>
      <div className='flex h-[calc(100vh_-_72px)] min-h-[400px] flex-col items-center justify-center gap-5'>
        <h1 className='text-center text-5xl font-bold leading-normal text-primary'>
          個人開発者のための
          <br />
          <span className='bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
            コミュニティプラットフォーム
          </span>
        </h1>
        <p className='text-center text-xl leading-normal text-foreground/70'>
          コードレビュー、プロジェクト参加、技術的な議論。
          <br />
          開発者同士が繋がり、共に成長できる場所です。
        </p>
        <div className='flex justify-center gap-2'>
          <Link
            href='/login'
            className={buttonVariants({
              variant: 'outline',
              className: 'w-[140px]',
            })}
          >
            ログイン
          </Link>
          <Link
            href='/signup'
            className={buttonVariants({
              className: 'w-[140px]',
            })}
          >
            無料で始める
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
