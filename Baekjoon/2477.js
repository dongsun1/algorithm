const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = input.shift()

const matrix = [];

input.forEach((row) => {
  matrix.push(row.split(' ').map(Number));
});

let big = Number.MIN_SAFE_INTEGER
let small = Number.MAX_SAFE_INTEGER
let index = 0;

for (let i = 0; i < matrix.length; i++) {
  const [a1, b1] = matrix[i]
  const [a2, b2] = matrix[(i + 1) % 6]

  if (b1 * b2 > big) {
    big = b1 * b2
    index = i
  }
}

small = matrix[(index + 3) % 6][1] * matrix[(index + 4) % 6][1]

console.info((big - small) * num);