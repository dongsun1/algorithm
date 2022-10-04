const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const num = input.shift();

let sum = 0;
const answer = [];
let i = 1;

while (true) {
  sum += i;
  if (sum > num) {
    break;
  } else {
    answer.push(i);
  }
  i++;
}

console.info(answer.pop());
