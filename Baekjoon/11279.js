// 최대 힙
let inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const arr = [];
const answer = [];
for (let i = 1; i <= Number(inputs[0]); i++) {
  if (Number(inputs[i]) === 0) {
    if (arr.length === 0) {
      answer.push(0);
    } else {
      const max = Math.max(...arr);
      const index = arr.indexOf(max);
      answer.push(arr[index]);
      arr.splice(index, 1);
    }
  } else {
    arr.push(Number(inputs[i]));
  }
}

console.log(answer.join("\r"));
