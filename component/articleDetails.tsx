/** @jsx h */
import { h } from "preact";
import { IArticleInDb } from "../interfaces/interface.ts";
import { getNumberResp } from "../utiles/number_repr.ts";

//
export default function ArticleDetails(
  prop: IArticleInDb,
) {
  console.log("articleDetails in components : ");
  console.log(prop);
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
          {prop.dateadd}
        </div>
        <div>
          <span>
            السعر
          </span>
          <sup>
            <span>
              <b style={{ "font-size": "2.5em" }} dir="ltr">
                {getNumberResp(prop.prix)}
              </b>
            </span>
            <sub>
              اوقية جيدة
            </sub>
          </sup>
        </div>
      </div>
      <div class="card__footer">
        <div>
          الهاتف
          <br />
          223399..
        </div>
      </div>
    </article>
  );
}
