import { NextRequest, NextResponse } from "next/server";

import { AdminLoginInfo } from "@/components/pages/login/LoginComp";

import { sign } from "jsonwebtoken";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { password, usernameOrEmail } = body as AdminLoginInfo;

  const token = sign({ password, usernameOrEmail }, "some-random-key");

  const res = NextResponse.next();

  res.cookies.set("token", token);

  return res;
}
