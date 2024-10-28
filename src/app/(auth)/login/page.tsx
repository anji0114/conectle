import { LoginContents } from '@/app/(auth)/components/LoginContents';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ログイン',
};

const LoginPage = () => {
  return <LoginContents />;
};

export default LoginPage;
