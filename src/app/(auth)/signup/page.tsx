import { redirect } from 'next/navigation';
import { Signup } from '@/app/(auth)/signup/_components/Signup';
import { createSupabaseServer } from '@/utils/supabase/server';

const SignupPage = async () => {
  const supabase = createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) return redirect('/dashboard');
  return <Signup />;
};

export default SignupPage;
