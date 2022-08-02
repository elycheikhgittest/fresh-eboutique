import { getArticles } from "./list.ts";

const rows = await getArticles();
console.log(rows);
