function solution(n, m) {
  const answer = [];
  const tmp = Array.from({ length: m }, () => 0)
  const dfs = (level, s) => {
    if (level === m) answer.push([...tmp])
    else {
      for (let i = s; i <= n; i++) {
        tmp[level] = i
        dfs(level + 1, i + 1)
      }
    }
  }

  dfs(0, 1)

  return answer;
}

console.log(solution(4, 2));