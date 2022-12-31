const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = input.shift()

const answer = []

for (let i = 0; i < num; i++) {
  const [x1, y1, x2, y2] = input.shift().split(' ')
  const n = input.shift()

  const arr = input.splice(0, n)

  let num = 0
  for (let j = 0; j < arr.length; j++) {
    const [z1, z2, r] = arr[j].split(' ')

    if ((x1 - z1) ** 2 + (y1 - z2) ** 2 < r ** 2) num++
    if ((x2 - z1) ** 2 + (y2 - z2) ** 2 < r ** 2) num++
    if ((x1 - z1) ** 2 + (y1 - z2) ** 2 < r ** 2 && (x2 - z1) ** 2 + (y2 - z2) ** 2 < r ** 2) num -= 2
  }
  answer.push(num)
}

console.info(answer.join('\n'));