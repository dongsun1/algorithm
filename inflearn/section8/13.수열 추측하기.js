function solution(n, f) {
  let answer = []
  let copy = Array.from({ length: n }, (v, i) => i + 1)
  let flag = 0;
  const memo = Array.from(Array(11), () => Array(11).fill(0))

  const visited = Array.from({ length: n }, () => false)

  const combi = (n, r) => {
    if (memo[n][r]) return memo[n][r]
    if (r === 0 || n === r) return 1
    return memo[n][r] = combi(n - 1, r) + combi(n - 1, r - 1)
  }

  const dfs = (level, sum) => {
    if (flag) return
    if (level === n && sum === f) {
      answer = [...copy]
      flag = 1
    } else {
      for (let i = 0; i < n; i++) {
        if (!visited[i]) {
          visited[i] = true
          copy[level] = i + 1
          dfs(level + 1, sum + (combi(n - 1, level) * (i + 1)))
          visited[i] = false
        }
      }
    }
  }

  dfs(0, 0)

  return answer;
}

console.log(solution(4, 16));