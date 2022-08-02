/** @jsx h */
import { h } from "preact";
import { ILoginState } from "../interfaces/mod.ts";

export default function () {
  return (
    <form method="POST">
      <input type="submit" value="خروج" />
    </form>
  );
}
