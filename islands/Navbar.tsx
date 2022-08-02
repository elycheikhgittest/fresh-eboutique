/** @jsx h */
import { Fragment, h } from "preact";

import { ILoginState } from "../interfaces/mod.ts";

export default function Navbar(props: ILoginState) {
  return (
    <nav class="nav">
      <input id="logo-toggler" type="checkbox" style="display: none" />
      <div class="nav__ham">
        <label for="logo-toggler">
          <svg
            class="nav__ham__open"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            class="nav__ham__close"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>
      </div>

      <div class="nav__logo">
        <img
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="RIMO"
        />
        <span class="nav__logo__title">RIMO</span>
      </div>

      <div class="nav__menu">
        <a href="/" class="active">
          عروض البيع
        </a>

        <a href="/search">
          بحث
        </a>

        {props.isLogin &&
          (
            <Fragment>
              <a href="/my/add">
                اضافة اعلان
              </a>
              <a href="/my/list">
                اعلاناتي الخاصة
              </a>
              <a href="/logout">
                خروج
              </a>
            </Fragment>
          )}

        {!props.isLogin &&
          (
            <Fragment>
              <a href="/user/login">
                دخول
              </a>
              <a href="/user/register">
                تسجيل
              </a>
            </Fragment>
          )}
      </div>

      <div class="nav__user">
        <input id="user-menu-toggler" type="checkbox" style="display: none" />
      </div>
    </nav>
  );
}
