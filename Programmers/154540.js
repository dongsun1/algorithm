function solution(maps) {
  var answer = [];

  const n = maps.length
  const m = maps[0].length

  const visited = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i]) visited[i] = []
      visited[i].push(false)
    }
  }

  const dx = [0, 1, -1, 0]
  const dy = [1, 0, 0, -1]

  const dfs = (i, j, num) => {
    let sum = num
    for (let k = 0; k < 4; k++) {
      const x = i + dx[k]
      const y = j + dy[k]

      if (x < n && x >= 0 && y < m && y >= 0 && !visited[x][y] && maps[x][y] !== 'X') {
        visited[x][y] = true
        sum += dfs(x, y, Number(maps[x][y]))
      }
    }
    return sum
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] !== 'X' && !visited[i][j]) {
        visited[i][j] = true
        answer.push(dfs(i, j, Number(maps[i][j])))
      }
    }
  }

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}