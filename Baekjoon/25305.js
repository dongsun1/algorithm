const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [num, cnt] = input.shift().split(" ");

console.info(
  input
    .shift()
    .split(" ")
    .sort((a, b) => b - a)[cnt - 1]
);
