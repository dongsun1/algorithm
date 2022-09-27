const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const num = input.shift();

let sum = 1;
for (let i = 1; i <= num; i++) {
  sum *= i;
}

console.log(sum);
