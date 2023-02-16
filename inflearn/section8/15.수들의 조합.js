function solution(n, k, arr, m) {
  let answer = 0;

  const dfs = (level, sum, s) => {
    if (level === k) {
      if (sum % m === 0) answer++
    } else {
      for (let i = s; i < n; i++) {
        dfs(level + 1, sum + arr[i], i + 1)
      }
    }
  }

  dfs(0, 0, 0)
  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));