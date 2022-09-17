const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const [row] = input.shift().split(" ").map(Number);

const high = input.reduce((acc, o) => {
  const arr = o.split(" ").map(Number);
  const max = Math.max(...arr);
  if (max > acc) acc = max;
  return acc;
}, 0);

const map = [];
for (let i = 0; i < row; i++) {
  const a = input[i].split(" ").map(Number);
  map.push(a);
}

let result = 1;

for (let i = 1; i <= high; i++) {
  const visit = [];

  for (let j = 0; j < row; j++) {
    visit[j] = new Array(row).fill(false);
  }

  let answer = 0;
  const dfs = (x, y) => {
    if (
      x >= 0 &&
      x < row &&
      y >= 0 &&
      y < row &&
      !visit[x][y] &&
      map[x][y] > i
    ) {
      visit[x][y] = true;
      dfs(x + 1, y);
      dfs(x - 1, y);
      dfs(x, y + 1);
      dfs(x, y - 1);
    }
  };

  for (let x = 0; x < row; x++) {
    for (let y = 0; y < row; y++) {
      if (!visit[x][y] && map[x][y] > i) {
        dfs(x, y);
        answer++;
      }
    }
  }
  if (answer > result) result = answer;
}

console.log(result);
