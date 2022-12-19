let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const num1 = input.shift()
const x = input.shift().split(' ')
const num2 = input.shift()
const y = input.shift().split(' ')

const map = new Map()

for (let i = 0; i < num1; i++) {
  map.set(x[i], i)
}

let answer = ''

for (let i = 0; i < num2; i++) {
  if (map.has(y[i])) answer += '1 '
  else answer += '0 '
}

console.info(answer);