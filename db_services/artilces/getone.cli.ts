import { getArticleById } from "./getone.ts";

const id = 2;
const results = await getArticleById(id);
if (results && results.length > 0) console.log(results[0]);
if (results && results.length == 0) {
  console.log(`no article with id : ${id} ${JSON.stringify(results.length)} `);
}
