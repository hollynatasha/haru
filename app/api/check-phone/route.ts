import { NextRequest, NextResponse } from 'next/server';
import { isPhoneUnique } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const { phone } = await req.json();
    if (!phone || typeof phone !== 'string') {
      return NextResponse.json({ error: 'Phone is required.' }, { status: 400 });
    }
    const unique = await isPhoneUnique(phone.replace(/\D/g, ''));
    return NextResponse.json({ unique });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
