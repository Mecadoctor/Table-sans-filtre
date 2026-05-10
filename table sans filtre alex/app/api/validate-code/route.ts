import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as { code?: string } | null;
  const code = (body?.code || "").trim();

  const raw = process.env.ACCESS_CODES || "";
  const codes = raw
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);

  if (!code) {
    return NextResponse.json({ ok: false, message: "Veuillez entrer un code." }, { status: 400 });
  }

  const ok = codes.includes(code);
  if (!ok) {
    return NextResponse.json({ ok: false, message: "Code invalide." }, { status: 401 });
  }

  return NextResponse.json({ ok: true });
}

