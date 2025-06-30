import { NextResponse } from "next/server";
import { getBag } from "@/lib/db/bag";

export async function GET() {
  const bag = await getBag();
  return NextResponse.json({ count: bag?.size ?? 0 });
}
