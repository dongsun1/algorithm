const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

let [n, m, v] = input.shift().split(" ").map(Number);
const graph = [];

for (let i = 0; i <= n; i++) {
  graph.push([]);
}

for (let i = 0; i < m; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach((o) => {
  o.sort((a, b) => a - b);
});

const visited = new Array(n).fill(false);
const dfsAnswer = [];

const dfs = (v) => {
  if (visited[v]) return;
  visited[v] = true;
  dfsAnswer.push(v);

  graph[v].forEach((o) => {
    dfs(o);
  });
};

dfs(v);
console.info(dfsAnswer.join(" "));

visited.fill(false);
const bfsAnswer = [];

const bfs = (v) => {
  const queue = [v];

  while (queue.length) {
    const x = queue.shift();
    if (visited[x]) continue;
    visited[x] = true;
    bfsAnswer.push(x);

    graph[x].forEach((o) => {
      queue.push(o);
    });
  }
};

bfs(v);
console.info(bfsAnswer.join(" "));
