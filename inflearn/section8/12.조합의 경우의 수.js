function solution(n, r) {
  const check = Array.from(Array(n + 1), () => Array(r + 1).fill(0));

  const dfs = (n, r) => {
    if (check[n][r]) return check[n][r];
    if (r === 0 || n === r) return 1;
    return (check[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r));
  };

  return dfs(n, r);
}

console.log(solution(33, 19));
