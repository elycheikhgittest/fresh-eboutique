import { getCookies } from "https://deno.land/std@0.149.0/http/cookie.ts";
import { v4 } from "https://deno.land/std@0.144.0/uuid/mod.ts";
//

import { getTokens } from "../db_services/tokens/getOne.ts";
import { pool } from "../config/pool.ts";

interface IWhoIsSendingRequest {
  userId: number;
  isLogin: boolean;
}

export async function isloginFromRequest(
  req: Request,
): Promise<IWhoIsSendingRequest> {
  const cookies = getCookies(req.headers);
  const token = cookies["token"];
  if (token && v4.validate(token)) {
    // I must verify token is in db
    const tokens = await getTokens(pool, token);
    if (tokens && tokens.length == 1) {
      return {
        userId: tokens[0].userid,
        isLogin: true,
      };
    } else {
      return {
        userId: -1,
        isLogin: false,
      };
    }
  } else {
    return {
      userId: -1,
      isLogin: false,
    };
  }
}
