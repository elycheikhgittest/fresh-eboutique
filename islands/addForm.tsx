/** @jsx h */
import { h } from "preact";

export default function AddForm() {
  return (
    <form class="form_container" method="POST">
      <select name="categorie">
        <option selected>
          اختر التصنيف
        </option>
        <option value="1">
          منازل
        </option>
        <option value="2">
          قطع ارضية
        </option>
        <option value="3">
          سيارات
        </option>
      </select>

      <select>
        <option selected>
          اختر المكان
        </option>
        <option value="1">
          نواكشوط-عرفات
        </option>
        <option value="2">
          يارتنواكشوط-ت
        </option>
        <option value="3">
          نواذيبو
        </option>
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
