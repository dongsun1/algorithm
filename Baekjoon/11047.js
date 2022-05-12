// 동전 0
let inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [N, K] = inputs.shift().split(" ");

const values = inputs.map((v) => Number(v));

let output = 0;
let num = 0;
for (let i = N - 1; i >= 0; i--) {
  const a = Math.floor(K / values[i]);
  if (a === 0) {
    continue;
  }
  num += a * values[i];
  output += a;
  K -= a * values[i];
  if (Number(K) === 0) {
    break;
  }
}
console.log(output);
