const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");

const allComputers = Number(input.shift());
const num = Number(input.shift());
const visit = Array.from({ length: num }, () => false);

visit[0] = true;
let answer = 0;
const dfs = (cur) => {
  for (let i = 0; i < num; i++) {
    const [a, b] = input[i].split(" ").map((o) => parseInt(o));
    if (a === cur && !visit[b - 1]) {
      visit[b - 1] = true;
      answer++;
      dfs(b);
    } else if (b === cur && !visit[a - 1]) {
      visit[a - 1] = true;
      answer++;
      dfs(a);
    }
  }
};

dfs(1);

console.log(answer);
