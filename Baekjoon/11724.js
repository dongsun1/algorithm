const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const [dot, line] = input.shift().split(" ").map(Number);

const visit = new Array(dot).fill(false);
const graph = [];
for (let i = 1; i <= dot; i++) {
  graph[i] = [];
}
for (let i = 0; i < line; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

const dfs = (cur) => {
  visit[cur] = true;

  for (let i = 0; i < graph[cur].length; i++) {
    if (!visit[graph[cur][i]]) {
      dfs(graph[cur][i]);
    }
  }
};

let ans = 0;
for (let i = 1; i <= dot; i++) {
  if (!visit[i]) {
    dfs(i);
    ans++;
  }
}

console.log(ans);
