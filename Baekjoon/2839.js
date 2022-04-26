// 설탕배달
const input = +require("fs").readFileSync("/dev/stdin").toString();
let result = -1;

let num = Math.floor(input / 5);
while (num >= 0) {
  const remain = input - num * 5;
  if (remain % 3 === 0) {
    result = remain / 3 + num;
    break;
  } else {
    num -= 1;
  }
}

console.log(result);
