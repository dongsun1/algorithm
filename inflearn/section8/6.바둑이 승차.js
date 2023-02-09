function solution(c, arr) {
  let answer = 0;
  const dfs = (level, sum) => {
    if (sum > c) return;
    if (level === arr.length) {
      answer = Math.max(answer, sum);
    } else {
      dfs(level + 1, sum + arr[level]);
      dfs(level + 1, sum);
    }
  }

  dfs(0, 0)
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.info(solution(259, arr));