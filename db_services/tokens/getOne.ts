import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import * as logger from "https://deno.land/std@0.149.0/log/mod.ts";

export async function getTokens(
  pool: postgres.Pool,
  token: string,
): Promise<any[] | void> {
  const client = await pool.connect();
  try {
    const result = await client.queryObject(
      `
      SELECT * FROM tokens
      WHERE token = $token 
      `,
      {
        token,
      },
    );
    console.log("get tokens from db");
    return result.rows;
  } catch (e) {
    logger.error(e);
  } finally {
    client.release();
  }
}

// const token = "0d93345f-88ee-4695-82f4-4b5f9c2adae1"
// const result = await getTokens(token)
// console.log(result)

// deno run --allow-all  db_services/tokens/getOne.ts
