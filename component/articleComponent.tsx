/** @jsx h */
import { h } from "preact";
import { Fragment } from "preact";
//

import { data as optionsData } from "../db_services/data_src.ts";
import { IArticleInDb } from "../interfaces/interface.ts";
import { getNumberResp } from "../utiles/number_repr.ts";
function getXFirstCharacters(word: string, max: number) {
  const l = word.length;
  const m = Math.min(max, l);
  return word.slice(0, m);
}

export default function ArticleComponent(prop: IArticleInDb) {
  const detailsUrl = `details/${prop.id}`;
  const isDemande = prop.categorie == 2;
  //const categorie_id = optionsData.categories[prop.categorie].id
  const categorie = optionsData.categories[prop.categorie].nom;
  const subcategorie = optionsData.subcategories[prop.categorie].nom;
  return (
    <div class="card-container">
      <article class="card">
        <div
          class="card__image"
          style="background-image: url(/img/ah1.jpg);"
        >
        </div>
        <div class="card__content">
          <h5 class="card__title">
            {categorie}/{subcategorie}
          </h5>
          <div>{prop.description.slice(0, 30)}...</div>
          {!isDemande && (
            <div>
              <span>
                <b style={{ "font-size": "2.5em" }} dir="ltr">
                  {getNumberResp(prop.prix)}
                </b>
              </span>
              <small>
                اوقية جيدة
              </small>
            </div>
          )}
        </div>
        <div class="card__footer">
          <span>{prop.dateadd}</span>
          <a href={detailsUrl}>
            تفاصيل
          </a>
        </div>
      </article>
    </div>
  );
}
