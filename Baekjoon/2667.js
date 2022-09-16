const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");

const num = Number(input.shift());
const home = input.map((o) => Array.from(o));
const visit = home.map((o) => o.map(() => false));
let number = 0;

const dfs = (i, j) => {
  if (
    i >= 0 &&
    i < num &&
    j >= 0 &&
    j < num &&
    !visit[i][j] &&
    home[i][j] === "1"
  ) {
    visit[i][j] = true;
    number++;
    dfs(i, j + 1);
    dfs(i, j - 1);
    dfs(i + 1, j);
    dfs(i - 1, j);
  }
};

const complex = [];

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (!visit[i][j] && home[i][j] === "1") {
      dfs(i, j);
      complex.push(number);
      number = 0;
    }
  }
}

complex.sort((a, b) => a - b);
console.log(complex.length);
console.log(complex.join("\n"));
