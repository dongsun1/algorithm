let input = require("fs").readFileSync("/dev/stdin").toString().trim()

let cnt = 0
let answer = 0
for (let i = 666; i < Number.MAX_SAFE_INTEGER; i++) {
  if (i.toString().includes('666')) cnt++

  if (cnt === +input) {
    answer = i
    break;
  }
}

console.info(answer);