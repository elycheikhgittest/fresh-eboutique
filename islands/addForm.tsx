/** @jsx h */
import { Fragment, h } from "preact";
import { useState } from "preact/hooks";
import { data } from "../db_services/data_src.ts";


export default function AddForm() {
  const [selectedCategorie, setSelectedCategorie] = useState("1"); 
  const handleSelectCategorie = (e: any) => {
    console.log("handleSelectCategorie");
    console.log(e.target.value);
    setSelectedCategorie(e.target.value);
 
  };

  return (
    <form class="form_container" method="POST">
      <select name="categorie" onChange={(e) => handleSelectCategorie(e)}>
        {/* <option selected value="-1">
          اختر التصنيف الرئيسئ
        </option> */}
        {data.categories.map((item) => (
          <option value={item.id}>{item.nom}</option>
        ))}
      </select>
  
      <select name="subcategorie">
        {data.subcategories.map((item) => {
          if (item.categorie_id == selectedCategorie ) {
            return <option value={item.id}>{item.nom}</option>;
          }
        })}
        </select>

      <select name="lieu">
        <option selected id="-1">
          اختر المكان
        </option>

        {data.lieux.map((item) => <option value={item.id}>{item.nom}</option>)}
      </select>

      <label>
        السعر بالاوقية
      </label>
      <input
        type="number"
        name="prix"
      />

      <label>
        الوصف
      </label>
      <input
        type="text"
        name="description"
      />
      <input type="submit" value="اضافة" />
    </form>
  );
}
