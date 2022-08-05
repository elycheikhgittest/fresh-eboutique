import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";

export async function drop_all_tables(pool: postgres.Pool) {
  const args = Deno.args;
  console.log({ args });
  const connection = await pool.connect();

  for (let index = 0; index < args.length; index++) {
    const t = args[index];
    try {
      // Create the table
      await connection.queryObject(
        `DROP TABLE ${t}`,
      );
      console.log("table users deleted");
    } catch (error) {
      console.log(error);
    }
    connection.release();
  }
}
