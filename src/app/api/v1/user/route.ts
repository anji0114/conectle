import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export const GET = async () => {
  try {
    const supabase = createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError) {
      return NextResponse.json(
        { message: 'Authentication error' },
        { status: 401 },
      );
    }

    if (!user?.id) {
      return NextResponse.json(
        { message: 'User not authenticated' },
        { status: 401 },
      );
    }

    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error) {
      return NextResponse.json(
        { message: 'Database error', details: error.message },
        { status: 400 },
      );
    }

    return NextResponse.json({ message: 'Success', data }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    const supabase = createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError) {
      return NextResponse.json(
        { message: 'Authentication error' },
        { status: 401 },
      );
    }

    if (!user?.id) {
      return NextResponse.json(
        { message: 'User not authenticated' },
        { status: 401 },
      );
    }

    // const body = await req.json();
  } catch {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
};
