import { type Metadata } from 'next';
import { Login } from '@/app/(auth)/login/_components/Login';

export const metadata: Metadata = {
  title: 'ログイン',
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
