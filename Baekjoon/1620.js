let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const [x, y] = input.shift().split(' ')

const map = new Map()

for (let i = 0; i < x; i++) {
  map.set(input[i], i + 1)
}

const input2 = input.splice(0, x)

for (let i = 0; i < y; i++) {
  if (isNaN(+input[i])) {
    console.info(map.get(input[i]));
  } else {
    console.info(input2[input[i] - 1]);
  }
}
