import { HandlerContext } from "$fresh/server.ts";

import { ArticlStore } from "../../../../interfaces/mock_article.ts";
const articleStore = new ArticlStore();
articleStore.InitArticles();

export const handler = (_req: Request, ctx: HandlerContext): Response => {
  const idx = parseInt(ctx.params.id) - 1;

  return Response.json(articleStore.articles[idx]);
};
