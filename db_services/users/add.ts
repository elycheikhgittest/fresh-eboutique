import "https://deno.land/std@0.149.0/dotenv/load.ts";
import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import * as logger from "https://deno.land/std@0.149.0/log/mod.ts";
import { IUser } from "../../interfaces/mod.ts";

export async function createUser(
  pool: postgres.Pool,
  user: IUser,
) {
  const client = await pool.connect();
  try {
    await client.queryObject(
      `
        INSERT INTO users
        (username, password)
        VALUES ( $username, $password)
        `,
      {
        username: user.username,
        password: user.password,
      },
    );
  } catch (e) {
    logger.error(e);
  } finally {
    client.release();
  }
}

//await createUser({ username: "ely1", password: "1234" });
