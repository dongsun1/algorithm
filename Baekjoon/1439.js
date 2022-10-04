const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const num1 = input[0].split("1");
const num0 = input[0].split("0");

let cnt1 = 0;
for (let i = 0; i < num1.length; i++) {
  if (num1[i].includes("0")) cnt1++;
}

let cnt0 = 0;
for (let i = 0; i < num0.length; i++) {
  if (num0[i].includes("1")) cnt0++;
}

console.info(cnt1 < cnt0 ? cnt1 : cnt0);
