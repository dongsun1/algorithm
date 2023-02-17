function solution(m, arr) {
  const dy = Array.from({ length: m + 1 }, () => 0)

  for (let i = 0; i < arr.length; i++) {
    const [score, time] = arr[i]
    for (let j = m; j >= time; j--) {
      dy[j] = Math.max(dy[j], dy[j - time] + score);
    }
  }
  return dy[m];
}