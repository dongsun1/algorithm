const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const num = input.shift();
const arr = input.shift().split("");

let answer = 0;
for (let i = 0; i <= num - 4; i++) {
  if (
    arr[i] === "p" &&
    arr[i + 1] === "P" &&
    arr[i + 2] === "A" &&
    arr[i + 3] === "p"
  ) {
    answer++;
    i += 3;
  }
}

console.log(answer);
