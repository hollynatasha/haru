import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

let initialized = false;

async function init() {
  if (initialized) return;
  await sql`
    CREATE TABLE IF NOT EXISTS spins (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL UNIQUE,
      prize TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  initialized = true;
}

export async function isPhoneUnique(phone: string): Promise<boolean> {
  await init();
  const rows = await sql`SELECT id FROM spins WHERE phone = ${phone}`;
  return rows.length === 0;
}

export async function getPreviousSpin(phone: string): Promise<{ name: string; prize: string } | null> {
  await init();
  const rows = await sql`SELECT name, prize FROM spins WHERE phone = ${phone}`;
  if (rows.length === 0) return null;
  return { name: rows[0].name, prize: rows[0].prize };
}

export async function recordSpin(name: string, phone: string, prize: string): Promise<void> {
  await init();
  await sql`INSERT INTO spins (name, phone, prize) VALUES (${name}, ${phone}, ${prize})`;
}
