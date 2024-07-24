import { Metadata } from 'next';
import { LoginContents } from '@/features/auth/components/LoginContents/LoginContents';

export const metadata: Metadata = {
  title: 'ログイン',
};

const LoginPage = () => {
  return <LoginContents />;
};

export default LoginPage;
