// 블랙잭
let inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = inputs.shift().split(" ");
const arr = inputs[0].split(" ").map(Number);

let answer = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = arr[i] + arr[j] + arr[k];
      const gap = M - sum;
      if (gap >= 0 && answer <= sum) {
        answer = sum;
      }
    }
  }
}
console.log(answer);
