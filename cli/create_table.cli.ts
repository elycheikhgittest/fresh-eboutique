import { pool } from "../config/pool.ts";

import {
  create_table_users,
  create_table_categories,
  // table deped on users table
  create_table_tokens,
  //table depend on categorie
  create_table_subcategories,
 
  // table depend on categorie
  create_table_articles,
} from "./create_tables.ts";

await create_table_users(pool);
 // table deped on users table
 await create_table_tokens(pool);

await create_table_categories(pool);
//table depend on categorie
await create_table_subcategories(pool)
//table depend on categorie
await create_table_articles(pool);