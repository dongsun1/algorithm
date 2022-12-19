const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const num = input.shift()

input.sort((a, b) => a - b)

let answer = ''

for (let i = 0; i < num; i++) {
  answer += input[i] + '\n'
}

console.info(answer);