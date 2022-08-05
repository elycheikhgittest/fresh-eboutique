import { hashPassword } from "../../utiles/hash_passord.ts";
import { getUserByName } from "../../db_services/users/getone.ts";

import { createUser } from "../../db_services/users/add.ts";

import { IToken } from "../../db_services/tokens/interface.ts";
import { createToken } from "../../db_services/tokens/add.ts";
import { pool } from "../../config/pool.ts";

async function createUserCli() {
  if (Deno.args.length > 1) {
    const username = Deno.args[0];
    const password = Deno.args[1];
    //
    let userId = -1;
    let tokenStr = "";
    const passwordHashed = hashPassword(password);
    //
    try {
      await createUser(pool, { username, password: passwordHashed });
      const users = await getUserByName(pool, username);
      if (users) {
        userId = users[0].id;
      }

      tokenStr = crypto.randomUUID();
      const tokenObj: IToken = {
        userId,
        token: tokenStr,
        expire_date: 1,
        isActive: 1,
      };

      await createToken(pool, tokenObj);
    } catch (error) {
      console.log(error);
    }
    //
  } else {
    console.log("you must pass username/tel and password in params");
  }
}

await createUserCli();
