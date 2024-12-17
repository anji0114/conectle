import { NextResponse } from 'next/server';
import { getUser } from '@/services/auth/getUser';
import { createSupabaseServer } from '@/utils/supabase/server';

export const GET = async () => {
  const user = await getUser();
  const supabase = createSupabaseServer();

  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .eq('user_id', user.id)
    .range(0, 10);

  if (error || !projects) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data: projects });
};
