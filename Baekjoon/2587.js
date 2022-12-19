const input = require('fs').readFileSync('example.txt').toString().trim().split('\n').map(Number)

input.sort((a, b) => a - b)
const avg = input.reduce((a, b) => a + b) / input.length
console.info(avg);
console.info(input[2]);