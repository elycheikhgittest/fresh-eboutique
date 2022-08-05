import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";

const databaseUrl = Deno.env.get("DATABASE_URL")!;
const pool = new postgres.Pool(databaseUrl, 3, true);

import { drop_all_tables } from "./drop_tables.ts";

drop_all_tables(pool);
