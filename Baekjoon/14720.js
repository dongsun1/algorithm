const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const len = input.shift();

const arr = input.shift().split(" ").map(Number);

let num = 0;
let answer = 0;

for (let i = 0; i < len; i++) {
  if (arr[i] === num) {
    answer++;
    num++;
    if (num > 2) num = 0;
  }
}

console.log(answer);
