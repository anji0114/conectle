import { redirect } from 'next/navigation';
import { type Metadata } from 'next';
import { Login } from '@/app/(auth)/login/_components/Login';
import { createSupabaseServer } from '@/utils/supabase/server';

export const metadata: Metadata = {
  title: 'ログイン',
};

const LoginPage = async () => {
  const supabase = createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) return redirect('/dashboard');

  return <Login />;
};

export default LoginPage;
