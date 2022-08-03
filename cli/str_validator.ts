// deno run cli/str_validator.ts

import { validate, required, isNumber } from "https://deno.land/x/validasaur@v0.15.0/mod.ts";

const inputs = {
  name: "",
  age: "20"
};

const [ passes, errors ] = await validate(inputs, {
  name: required,
  age: [required, isNumber]
});

console.log({ passes, errors });