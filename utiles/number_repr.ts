// deno run utiles/number_repr.ts

export function getNumberResp1(n: number) {
  const sep = " ";
  const n_l = Math.ceil(Math.log10(n)); // number length in base 10
  let i = 0; // number of digit traited
  const arr: string[] = [];
  console.log(n);
  while (n > 0) {
    let n1 = String(n % 1000);
    if (n1.length == 1 && i + 3 < n_l) {
      n1 = "00" + n1;
    }
    if (n1.length == 2 && i + 3 < n_l) {
      n1 = "0" + n1;
    }
    i = i + 3;
    arr.push(n1);
    n = Math.floor(n / 1000);
  }

  const arr2: string[] = [];

  const l = arr.length;
  for (let index = 0; index < arr.length; index++) {
    arr2.push(arr[l - 1 - index]);
  }
  return arr2.join(sep);
}

export function getNumberResp(n: number) {
    if(n == 0){
    return "0"
  }else{
    return getNumberResp1(n)
  }
}

const r = getNumberResp(0);
console.log(r);
