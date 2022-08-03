// deno run cli/str_validator.ts
//
import {
  firstMessages,
  flattenMessages,
  maxLength,
  minLength,
  numberBetween,
  required,
  validate,
} from "https://deno.land/x/validasaur@v0.15.0/mod.ts";

const inputs = {
  description: "une maison",
  categorie: 2,
};
const articleValidationRules = {
  description: [required, minLength(4), maxLength(10)],
  categorie: [required, numberBetween(0, 5)],
};
const [passes, errors] = await validate(inputs, articleValidationRules);
const firstErrors = firstMessages(errors);
const flattenErrors = flattenMessages(errors);
//
console.log({ passes });
console.log({ firstErrors });
console.log({ flattenErrors });
