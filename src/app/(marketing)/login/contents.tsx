import { Input } from '@/components/ui/Input/Input';

export const LoginContents = () => {
  return (
    <div className='max-w-[688px] mx-auto px-6 py-10'>
      <div className='space-y-6'>
        <h1 className='text-center font-bold text-lg'>ログイン</h1>
        <div className='space-y-4'>
          <div className='space-y-3'>
            <p>メールアドレス</p>
            <div>
              <Input />
            </div>
          </div>
          <div className='space-y-3'>
            <p>パスワード</p>
            <div>
              <Input />
            </div>
          </div>
          <div className='text-center'>
            <button className='bg-gray-500 text-white text-sm rounded px-8 py-3 '>
              ログイン
            </button>
          </div>
        </div>
        <div className='space-y-2'>
          <button className='border-2 border-gray-300  px-4 py-3 rounded-lg w-full text-sm'>
            Googleでログイン
          </button>
          <button className='bg-gray-600 text-white px-4 py-3 rounded-lg w-full text-sm'>
            Githubでログイン
          </button>
        </div>
      </div>
    </div>
  );
};
