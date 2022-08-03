import { getCookies } from "https://deno.land/std@0.149.0/http/cookie.ts";
import { v4 } from "https://deno.land/std@0.144.0/uuid/mod.ts";
//

import { getTokens } from "../db_services/tokens/getOne.ts";
import { pool } from "../config/pool.ts";

export async function isloginFromRequest(req: Request) {
  console.log("isloginFromRequest function");
  const cookies = getCookies(req.headers);
  console.log({ cookies });

  const token = cookies["token"];
  console.log({ token });
  if (token && v4.validate(token)) {
    // I must verify token is in db
    const tokens = await getTokens(pool, token);
    if (tokens && tokens.length == 1) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// authResponse function
