import { redirect } from 'next/navigation';
import { type Metadata } from 'next';
import { Login } from '@/app/(auth)/login/_components/Login';
import { createClient } from '@/utils/supabase/server';

export const metadata: Metadata = {
  title: 'ログイン',
};

const LoginPage = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) return redirect('/');

  return <Login />;
};

export default LoginPage;
