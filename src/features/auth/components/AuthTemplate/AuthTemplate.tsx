import { FC } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { Container } from '@/components/ui/Container/Container';
import { Input } from '@/components/ui/Input/Input';
import { InputSection } from '@/features/auth/components/InputSection/InputSection';
import { UseFormRegister } from 'react-hook-form';
import { TAuthForm } from '@/features/auth/config/authSchema';
import { SocialAuthButton } from '../SocialAuthButton/SocialAuthButton';

type TAuthTemplateProps = {
  errorMessage: string;
  authType: 'login' | 'register';
  isValid: boolean;
  onSubmit: () => void;
  register: UseFormRegister<TAuthForm>;
};

export const AuthTemplate: FC<TAuthTemplateProps> = ({
  errorMessage,
  authType,
  isValid,
  onSubmit,
  register,
}) => {
  return (
    <div className='py-12 px-10'>
      <Container maxWidth='688px'>
        <div className='space-y-10 border border-gray-300 p-10 rounded-xl shadow-sm'>
          {errorMessage && (
            <p className='bg-danger text-center p-3 rounded text-white font-bold text-sm'>
              {errorMessage}
            </p>
          )}

          <h1 className='text-center font-bold text-2xl leading-none'>
            {authType === 'login' && 'ログイン'}
            {authType === 'register' && '新規会員登録'}
          </h1>
          <form onSubmit={onSubmit}>
            <div className='space-y-6'>
              <InputSection label='メールアドレス'>
                <Input {...register('email')} inputType='fill' />
              </InputSection>
              <InputSection label='パスワード' caution='半角英数字8文字以上'>
                <Input {...register('password')} inputType='fill' />
              </InputSection>
              <div className='text-center'>
                <Button
                  buttonType='dark'
                  width='120px'
                  type='submit'
                  disabled={!isValid}
                >
                  ログイン
                </Button>
              </div>
              <div className='space-y-2'>
                <SocialAuthButton socialType='google' authType={authType} />
                <SocialAuthButton socialType='github' authType={authType} />
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};
