import { pool } from "../config/pool.ts";

import {
  // table depend on categorie
  create_table_articles,
  create_table_categories,
  //table depend on categorie
  create_table_subcategories,
  // table deped on users table
  create_table_tokens,
  create_table_users,
} from "./create_tables.ts";

await create_table_users(pool);
// table deped on users table
await create_table_tokens(pool);

await create_table_categories(pool);
//table depend on categorie
await create_table_subcategories(pool);
//table depend on categorie
await create_table_articles(pool);
