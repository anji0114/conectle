import { redirect } from 'next/navigation';
import { Signup } from '@/app/(auth)/signup/_components/Signup';
import { createClient } from '@/utils/supabase/server';

const SignupPage = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) return redirect('/');
  return <Signup />;
};

export default SignupPage;
