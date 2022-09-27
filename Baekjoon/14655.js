const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const num = input.shift();
const max = input
  .shift()
  .split(" ")
  .map((o) => Math.abs(o))
  .reduce((a, b) => a + b);
const min = input
  .shift()
  .split(" ")
  .map((o) => Math.abs(o))
  .reduce((a, b) => a + b);

console.info(max + min);
