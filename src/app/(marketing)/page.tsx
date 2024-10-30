import { SimpleButton } from '@/components/ui/Button/SimpleButton';

const Home = () => {
  return (
    <div>
      <div className='flex h-[calc(100vh_-_72px)] min-h-[400px] flex-col items-center justify-center gap-5'>
        <h1 className='text-3xl font-bold leading-tight'>
          誰かの<span className='text-primary-900'>個人開発</span>にジョインする
        </h1>
        <div className='flex justify-center gap-2'>
          <SimpleButton
            tag='link'
            href='/login'
            buttonSize='lg'
            buttonType='plain'
            width='160px'
          >
            ログイン
          </SimpleButton>
          <SimpleButton tag='link' href='/signup' buttonSize='lg' width='160px'>
            新規登録
          </SimpleButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
