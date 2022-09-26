const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const len = input.shift();

const arr = input.shift().split(" ").map(Number);

const max = Math.max(...arr);

const i = arr.findIndex((e) => e === max);

arr.splice(i, 1);

console.log(arr.reduce((a, b) => a + b));
