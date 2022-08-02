/** @jsx h */
import { h } from "preact";

import { IS_BROWSER } from "$fresh/runtime.ts";
interface paginationProps {
  id: number;
}

export default function Pagination(props: paginationProps) {
  const nextPage = () => {
    const idx = props.id + 1;
    const { protocol, host } = location;
    const url = `${protocol}//${host}?_page=${idx}`;
    location.assign(url);
  };

  return (
    <div>
      <div>
        الصفحة 1 من 2 .
      </div>
      <button disabled={!IS_BROWSER} onClick={() => nextPage()}>
        الموالية
      </button>
    </div>
  );
}
