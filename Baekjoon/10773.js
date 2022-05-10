let inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const arr = [];
for (let i = 1; i <= Number(inputs[0]); i++) {
  if (Number(inputs[i]) === 0) {
    arr.pop();
  } else {
    arr.push(Number(inputs[i]));
  }
}
const sum = arr.reduce((a, b) => {
  return a + b;
}, 0);
console.log(sum);
