const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

while (true) {
  const [col, row] = input.shift().split(" ").map(Number);

  if (row === 0 && col === 0) break;

  const map = [];
  const visit = [];
  for (let i = 0; i < row; i++) {
    const a = input.shift().split(" ").map(Number);
    map.push(a);
  }

  for (let i = 0; i < row; i++) {
    visit[i] = new Array(col).fill(false);
  }

  let answer = 0;
  const dfs = (i, j) => {
    if (i >= 0 && i < row && j >= 0 && j < col && !visit[i][j] && map[i][j]) {
      visit[i][j] = true;
      dfs(i + 1, j);
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
      dfs(i - 1, j - 1);
      dfs(i + 1, j - 1);
      dfs(i - 1, j + 1);
      dfs(i + 1, j + 1);
    }
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!visit[i][j] && map[i][j]) {
        dfs(i, j);
        answer++;
      }
    }
  }
  console.info(answer);
}
