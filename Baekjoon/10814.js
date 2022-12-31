const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const num = input.shift()

input.sort((a, b) =>
  a.split(' ')[0] - b.split(' ')[0]
)

console.info(input.join('\n'));
