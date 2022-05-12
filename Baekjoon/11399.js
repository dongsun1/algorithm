// ATM
let inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = inputs.shift();
const arr = inputs[0]
  .split(" ")
  .map((v) => Number(v))
  .sort((a, b) => a - b);

let result = 0;
let before = 0;

for (let i = 0; i < N; i++) {
  result += before + arr[i];
  before += arr[i];
}

console.log(result);
