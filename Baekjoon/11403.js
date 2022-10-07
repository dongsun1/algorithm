const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const num = input.shift();

const line = [];
for (let i = 0; i < num; i++) line.push(input[i].split(" ").map(Number));

const graph = [];
const answer = [];
for (let i = 0; i < num; i++) {
  graph.push([]);
  answer.push([]);
}

for (let i = 0; i < line.length; i++) {
  for (let j = 0; j < line.length; j++) {
    if (line[i][j] === 1) {
      graph[i].push(j);
    }
  }
}

const bfs = (x, y) => {
  const queue = [x];
  const visited = new Array(num).fill(false);
  let check = 0;

  while (queue.length) {
    const nx = queue.shift();
    if (visited[nx]) continue;
    visited[nx] = true;

    graph[nx].forEach((o) => {
      queue.push(o);
    });

    if (queue.includes(y)) {
      check++;
      break;
    }
  }
  answer[x].push(check);
};

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    bfs(i, j);
  }
}

for (let i = 0; i < num; i++) console.log(answer[i].join(" "));
