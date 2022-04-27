// ACM 호텔
let inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const T = inputs[0];

for (let i = 1; i <= T; i++) {
  const [H, W, guest] = inputs[i].split(" ");
  let num = Math.ceil(guest / H);
  let floor = guest % H;
  if (floor === 0) {
    num = Math.floor(guest / H);
    floor = H;
  }
  console.log(`${floor * 100 + num}`);
}
