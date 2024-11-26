import Link from 'next/link';
import { CodeBracketIcon } from '@heroicons/react/16/solid';
import { buttonVariants } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

const TopPage = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-5 px-10 py-24'>
        <h1 className='text-center text-3xl font-bold leading-normal text-primary lg:text-5xl lg:leading-normal'>
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

      <div>
        <Container>
          <div className='flex gap-8'>
            <div className='flex-1 rounded-lg border p-6'>
              <div className='flex items-center gap-3'>
                <CodeBracketIcon className='size-10 text-blue-500' />
                <h3 className='text-xl font-bold'>コードレビュー</h3>
              </div>
              <p className='mt-3 text-sm text-foreground/70'>
                経験豊富な開発者からフィードバックを得て、コードの品質を向上させましょう
              </p>
            </div>
            <div className='flex-1 rounded-lg border p-6'>
              <h3 className='text-lg font-bold'>プロジェクト</h3>
              <p className='mt-3 text-sm text-foreground/70'>
                興味のあるプロジェクトに参加し、実践的な開発経験を積むことができます
              </p>
            </div>
            <div className='flex-1 rounded-lg border p-6'>
              <h3 className='text-lg font-bold'>技術的な議論</h3>
              <p className='mt-3 text-sm text-foreground/70'>
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
