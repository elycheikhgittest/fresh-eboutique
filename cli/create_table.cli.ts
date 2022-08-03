import { pool } from "../config/pool.ts";

import {
  create_table_articles,
  create_table_tokens,
  create_table_users,
} from "./create_tables.ts";

await create_table_users(pool);
await create_table_articles(pool);
await create_table_tokens(pool);
