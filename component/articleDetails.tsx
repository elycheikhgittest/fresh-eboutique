/** @jsx h */
import { h } from "preact";
import { IArticleInDb } from "../interfaces/interface.ts";
import { getNumberResp } from "../utiles/number_repr.ts";

//
export default function ArticleDetails(
  prop: IArticleInDb,
) {
  return (
    <article class="card">
      <div class="card__image" style="background-image: url(/img/ah1.jpg);">
      </div>
      <div class="card__content">
        <h5 class="card__title">
          سيارة جيدة
        </h5>
        <div>
          {prop.description}
          <br />

          <span dir="ltr">{prop.dateadd}</span>
        </div>
        <div>
          <hr />

          <span>
            <b style={{ "font-size": "2.5em" }} dir="ltr">
              {getNumberResp(prop.prix)}
            </b>
          </span>
          <sub>
            اوقية جيدة
          </sub>
        </div>
      </div>
      <div class="card__footer">
        <div>
          الهاتف
          <br />
          {prop.username!}
        </div>
      </div>
    </article>
  );
}
