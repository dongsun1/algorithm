// Fly me to the Alpha Centauri
let inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const T = inputs[0];

for (let i = 1; i <= T; i++) {
  const [x, y] = inputs[i].split(" ");

  const distance = y - x;
  let n = 0;
  while (true) {
    if (distance <= n * (n + 1)) {
      break;
    }
    n += 1;
  }

  if (distance <= n ** 2) {
    console.log(n * 2 - 1);
  } else {
    console.log(n * 2);
  }
}
