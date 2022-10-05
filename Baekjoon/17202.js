const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

let A = input.shift();
let B = input.shift();

let answer = [];

for (let i = 0; i < A.length; i++) {
  answer.push(Number(A[i]));
  answer.push(Number(B[i]));
}

while (answer.length > 2) {
  const arr = [];
  for (let i = 0; i < answer.length - 1; i++) {
    arr.push((answer[i] + answer[i + 1]) % 10);
  }

  answer = arr;
}

console.info(answer.join(""));
