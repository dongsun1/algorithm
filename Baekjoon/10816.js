let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const num1 = input.shift()
const arr1 = input.shift().split(' ')
const num2 = input.shift()
const arr2 = input.shift().split(' ')

const map = new Map()

for (let i = 0; i < num1; i++) {
  if (map.has(arr1[i])) map.set(arr1[i], map.get(arr1[i]) + 1)
  else map.set(arr1[i], 1)
}

let answer = ''

for (let i = 0; i < num2; i++) {
  if (map.has(arr2[i])) answer += map.get(arr2[i]) + ' '
  else answer += '0 '
}

console.info(answer);