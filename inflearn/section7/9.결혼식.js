function solution(times) {
  let answer = 0
  const arr = []

  times.forEach(([s, e]) => {
    arr.push([s, 1])
    arr.push([e, 2])
  })

  arr.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1]
    return a[0] - b[0]
  })

  let temp = 0
  arr.forEach(([num, t]) => {
    if (t === 1) temp++
    else temp--

    answer = Math.max(answer, temp)
  })

  return answer;
}

console.info(solution([[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]]));