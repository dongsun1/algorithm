function solution(m, ps, pt) {
  let answer = 0;

  const dfs = (level, score, time) => {
    if (time > m) return

    if (level === ps.length) {
      answer = Math.max(score, answer)
    } else {
      dfs(level + 1, score + ps[level], time + pt[level])
      dfs(level + 1, score, time)
    }
  }

  dfs(0, 0, 0)
  return answer;
}