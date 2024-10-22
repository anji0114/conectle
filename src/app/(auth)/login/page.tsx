import { Metadata } from 'next';
import { LoginContents } from '@/app/(auth)/components/LoginContents';

export const metadata: Metadata = {
  title: 'ログイン',
};

const LoginPage = () => {
  return <LoginContents />;
};

export default LoginPage;
