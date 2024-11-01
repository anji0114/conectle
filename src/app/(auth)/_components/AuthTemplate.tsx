import type { FC } from 'react';
import { InputSection } from '@/app/(auth)/_components/InputSection';
import type {
  TLoginForm,
  TRegisterForm,
} from '@/app/(auth)/_constants/authSchema';
import { Container } from '@/components/ui/Container/Container';
import { Input } from '@/components/ui/Input/Input';
import { SocialAuthButton } from './SocialAuthButton';
import type { UseFormRegister } from 'react-hook-form';

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
  onSubmit,
  register,
}) => {
  return (
    <div className='px-10 py-12'>
      <Container maxWidth='688px'>
        <div className='space-y-10 rounded-xl border border-gray-300 p-10 shadow-sm'>
          {errorMessage && (
            <p className='rounded p-3 text-center text-sm font-bold text-white'>
              {errorMessage}
            </p>
          )}

          <h1 className='text-center text-2xl font-bold leading-none'>
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

              <div className='text-center'></div>
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
