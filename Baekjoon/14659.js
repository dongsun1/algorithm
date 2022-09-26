const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const num = input.shift();
const arr = input.shift().split(" ").map(Number);
let answer = 0;
let cur = 0;
let count = 0;
for (let i = 0; i < num; i++) {
  if (arr[i] >= cur) {
    cur = arr[i];
    count = 0;
  } else {
    count++;
    if (count > answer) {
      answer = count;
    }
  }
}

console.log(answer);
