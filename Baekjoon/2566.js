let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const map = []

input.forEach(o => {
  map.push(o.split(' ').map(Number))
})

let max = 0
let xy = [0, 0]

for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    if (max <= map[i][j]) {
      max = map[i][j]
      xy = [i + 1, j + 1]
    }
  }
}

console.info(max);
console.info(xy.join(' '));