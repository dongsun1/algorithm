const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const num = input.shift()

let answer = 0;

const map = Array.from(Array(100), () => Array(100).fill(0))

for (let i = 0; i < num; i++) {
  const [x, y] = input[i].split(' ').map(Number)

  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      if (map[j][k] === 0) {
        map[j][k]++
        answer++
      }
    }
  }
}

console.info(answer);