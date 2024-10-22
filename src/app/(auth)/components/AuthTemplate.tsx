import { FC } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { Container } from '@/components/ui/Container/Container';
import { Input } from '@/components/ui/Input/Input';
import { InputSection } from '@/app/(auth)/components/InputSection';
import { UseFormRegister } from 'react-hook-form';
import { TLoginForm, TRegisterForm } from '@/app/(auth)/constants/authSchema';
import { SocialAuthButton } from './SocialAuthButton';

type TAuthForm = {
  errorMessage: string;
  isValid: boolean;
  onSubmit: () => void;
};

type TLoginFormProps = {
  authType: 'login';
  register: UseFormRegister<TLoginForm>;
} & TAuthForm;

type TRegisterFormProps = {
  authType: 'register';
  register: UseFormRegister<TRegisterForm>;
} & TAuthForm;

type TAuthTemplateProps = TLoginFormProps | TRegisterFormProps;

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
            {authType === 'register' && '新規登録'}
          </h1>
          <form onSubmit={onSubmit}>
            <div className='space-y-6'>
              {authType === 'register' && (
                <InputSection
                  label='ユーザーネーム'
                  caution='半角英数字4文字以上'
                >
                  <Input {...register('username')} inputType='fill' />
                </InputSection>
              )}

              <InputSection label='メールアドレス'>
                <Input
                  {...(register as UseFormRegister<TLoginForm>)('email')}
                  inputType='fill'
                />
              </InputSection>
              <InputSection label='パスワード' caution='半角英数字8文字以上'>
                <Input
                  {...(register as UseFormRegister<TLoginForm>)('password')}
                  inputType='fill'
                  type='password'
                />
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
