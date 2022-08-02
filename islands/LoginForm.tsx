/** @jsx h */
import { h } from "preact";
import { ILoginState } from "../interfaces/mod.ts";

export default function (props: ILoginState) {
  const { isLogin } = props;

  addEventListener("load", () => {
    if (isLogin) {
      location.assign(`${location.protocol}//${location.host}/my/add`);
    }
  });

  return (
    <form class="form_container" method="POST">
      <label>
        الهاتف
      </label>
      <input
        type="text"
        name="username"
        placeholder="الهاتف"
      />

      <label>
        كلمة السر
      </label>
      <input
        type="password"
        name="password"
        placeholder="كلمة السر"
      />

      <input type="submit" value="ارسال" />
    </form>
  );
}
