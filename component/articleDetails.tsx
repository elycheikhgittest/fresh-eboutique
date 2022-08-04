/** @jsx h */
import { h } from "preact";
import { IArticleInDb } from "../interfaces/interface.ts";
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
        </div>
        <div>
          <span>
            السعر
          </span>

          <span>
            <b>
              {prop.prix}
            </b>
          </span>
          <sub>
            اوقية جيدة
          </sub>
        </div>
      </div>
      <div class="card__footer">
        <div>
          معلومات المعلن
        </div>
        <br />
        <div>
          الهاتف
        </div>
        <div>
          223399..{prop.dateadd}
        </div>
      </div>
    </article>
  );
}
