let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const [x, y] = input.shift().split(' ')

const set = new Set(input.splice(0, x))

let answer = 0;
for (let i = 0; i < y; i++) {
  if (set.has(input[i])) answer++
}

console.info(answer);