/** @jsx h */
import { h } from "preact";
import { IArticleItem } from "../interfaces/mod.ts";
export default function ArticleDetails(
  prop: IArticleItem,
) {
  return (
    <article class="card">
      <div class="card__image" style="background-image: url(/img/ah1.jpg);">
      </div>
      <div class="card__content">
        <h5 class="card__title">
          سيارة جيدة
        </h5>
        <div>{prop.desc}</div>
        <div>
          <span>{prop.prix}</span>
          <small>
            اوقية جيدة
          </small>
        </div>
      </div>
      <div class="card__footer">
        <div>
          <span>{prop.dateAdd}</span>
        </div>
      </div>
    </article>
  );
}
