import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import * as logger from "https://deno.land/std@0.149.0/log/mod.ts";
import { IToken } from "./interface.ts";

export async function createToken(
  pool: postgres.Pool,
  token: IToken,
) {
  const client = await pool.connect();
  try {
    const result = await client.queryObject(
      `
        INSERT INTO tokens
        (user_id, token, expire_date, isActive)
        VALUES ( $userId, $token, $expire_date, $isActive)
        `,
      {
        ...token,
      },
    );
    return result;
  } catch (e) {
    logger.error(e);
  } finally {
    client.release();
  }
}

// const tokenStr = crypto.randomUUID()
// const tokenObj:IToken = {
//     userId:5,
//     token:tokenStr,
//     expire_date:1,
//     isActive:1
// }

// await createToken(tokenObj)
// deno run --allow-net --allow-env db_services/tokens/add.ts
