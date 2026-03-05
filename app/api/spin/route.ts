import { NextRequest, NextResponse } from 'next/server';
import { isPhoneUnique, recordSpin, getPreviousSpin } from '@/lib/db';
import { pickPrize } from '@/lib/prizes';

export async function POST(req: NextRequest) {
  try {
    const { name, phone } = await req.json();

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Invalid name.' }, { status: 400 });
    }

    const cleanPhone = (phone ?? '').replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 8 || cleanPhone.length > 15) {
      return NextResponse.json({ error: 'Invalid phone number.' }, { status: 400 });
    }

    if (!(await isPhoneUnique(cleanPhone))) {
      const previous = await getPreviousSpin(cleanPhone);
      return NextResponse.json(
        { error: 'already_used', previousPrize: previous?.prize ?? null, previousName: previous?.name ?? null },
        { status: 409 }
      );
    }

    const prize = pickPrize();
    await recordSpin(name.trim(), cleanPhone, prize.label);

    return NextResponse.json({ prize });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
