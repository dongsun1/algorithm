const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const arr = input.shift().split("");

const aphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let first = "A";
let answer = 0;
arr.forEach((o) => {
  const i = aphabet.findIndex((e) => e === first);
  const j = aphabet.findIndex((e) => e === o);
  first = aphabet[j];
  if (Math.abs(i - j) < 26 - Math.abs(i - j)) answer += Math.abs(i - j);
  else answer += 26 - Math.abs(i - j);
});

console.log(answer);
