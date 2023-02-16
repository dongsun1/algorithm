function solution(s, e) {
  let answer = 0;
  const queue = [s]
  const level = Array.from({ length: 10000 }, () => 0)

  while (queue.length) {
    const x = queue.shift()
    for (const nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return level[x] + 1
      else {
        queue.push(nx)
        level[nx] = level[x] + 1
      }
    }
  }
  return answer;
}

console.log(solution(5, 14));