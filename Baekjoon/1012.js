const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const caseNum = input.shift();
const answer = [];
for (let i = 0; i < caseNum; i++) {
  let count = 0;
  const [row, col, num] = input
    .shift()
    .split(" ")
    .map((o) => parseInt(o));

  const visit = [];
  const place = [];
  for (let i = 0; i < row; i++) {
    visit.push(new Array(col).fill(false));
    place.push(new Array(col).fill(false));
  }

  for (let i = 0; i < num; i++) {
    const [a, b] = input[0].split(" ");
    input.shift();
    place[a][b] = true;
  }

  const dfs = (rowz, colz) => {
    if (
      rowz >= 0 &&
      rowz < row &&
      colz >= 0 &&
      colz < col &&
      !visit[rowz][colz] &&
      place[rowz][colz]
    ) {
      visit[rowz][colz] = true;
      count++;
      dfs(rowz, colz + 1);
      dfs(rowz, colz - 1);
      dfs(rowz - 1, colz);
      dfs(rowz + 1, colz);
    }
  };

  let group = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!visit[i][j] && place[i][j]) {
        dfs(i, j);
        if (count > 0) group++;
      }
    }
  }
  answer.push(group);
}

console.log(answer.join("\n"));
