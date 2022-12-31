let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [x, y] = input.shift().split(' ')

const input1 = input.splice(0, x)

const answer = []

for (let i = 0; i < x; i++) {
  const a = []
  for (let j = 0; j < y; j++) {
    a.push(input1[i].split(' ').map(Number)[j] + input[i].split(' ').map(Number)[j])
  }
  answer.push(a.join(' '))
}

console.log(answer.join('\n'));