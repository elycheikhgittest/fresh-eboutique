import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, ctx: HandlerContext): Response => {
  const _idx = parseInt(ctx.params.id) - 1;

  return Response.json({});
};
