import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";

export async function create_all_tables(
  pool: postgres.Pool,
  paths: string[],
) {
  const connection = await pool.connect();
  try {
    // Create the table
    for (const item of paths) {
      const p = `${Deno.cwd()}/cli/sql_texts/${item}`;
      const sqlText = await Deno.readTextFile(p);
      await connection.queryObject(sqlText);
    }
    // replace consol log by std/logger
    console.log("all tables was created");
  } finally {
    // Release the connection back into the pool
    connection.release();
  }
}
