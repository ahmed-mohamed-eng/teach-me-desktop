import type { NextApiRequest, NextApiResponse } from "next";

import { AdminLoginInfo } from "@/components/pages/login/LoginComp";

import { sign } from "jsonwebtoken";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  console.log({ method, body });

  const { password, usernameOrEmail } = body as AdminLoginInfo;

  console.log({ password, usernameOrEmail });

  res.status(201).send(sign({ password, usernameOrEmail }, "some-random-key"));
}
