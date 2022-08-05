import { HandlerContext } from "$fresh/server.ts";
// import * as mod from "https://deno.land/std@0.149.0/http/mod.ts";

import {
  Cookie,
  setCookie,
} from "https://deno.land/std@0.149.0/http/cookie.ts";

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => { 
  const _d = await req.json(); 
  //const headers = new Headers();
  const cookie: Cookie = { name: "ely", value: "smail", httpOnly: true };
  // save in db
  // then redirect vert add
  // catch redirect to the same page with user already registed

  const r = Response.json({ userid: 1 });

  setCookie(r.headers, cookie);

  return r;
};
