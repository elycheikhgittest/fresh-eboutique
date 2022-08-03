import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import * as logger from "https://deno.land/std@0.149.0/log/mod.ts";

export async function getUserByName(
  pool: postgres.Pool,
  username: string,
): Promise<any[] | void> {
  const client = await pool.connect();

  try {
    const users = await client.queryObject(
      `
        SELECT * FROM users
        WHERE
        username = $username
        `,
      {
        username,
      },
    );
    //console.log(users.rows);
    return users.rows;
  } catch (e) {
    logger.error(e);
  } finally {
    client.release();
  }
}

//await getUserByName("ely");
