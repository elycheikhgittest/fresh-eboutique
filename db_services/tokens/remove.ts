import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import * as logger from "https://deno.land/std@0.149.0/log/mod.ts";

export async function removeToken(
  pool: postgres.Pool,
  token: string,
) {
  const client = await pool.connect();
  try {
    const result = await client.queryObject(
      `
      DELETE FROM tokens
      WHERE token = $token 
      `,
      {
        token,
      },
    );
    return result;
  } catch (e) {
    logger.error(e);
  } finally {
    client.release();
  }
}

// 21ee25eb-5ee1-4356-81b2-2d2a15509679
// const token = "21ee25eb-5ee1-4356-81b2-2d2a15509679"
// const result = await removeToken(token)
// console.log(result)

// deno run --allow-all db_services/tokens/remove.ts
