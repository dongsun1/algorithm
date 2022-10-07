const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const miro = [];

for (let i = 0; i < n; i++) miro.push(input.shift().split("").map(Number));
const visited = Array.from({ length: n }, () => Array(m).fill(0));

const moveX = [-1, 0, 1, 0];
const moveY = [0, 1, 0, -1];
const queue = [];

const bfs = (x, y) => {
  queue.push([x, y]);
  visited[x][y] = 1;
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + moveX[i], y + moveY[i]];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (miro[nx][ny] && !visited[nx][ny]) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
};

bfs(0, 0);

console.log(visited[n - 1][m - 1]);
