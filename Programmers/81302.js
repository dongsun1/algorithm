function solution(places) {
  var answer = [];
  const n = 5

  const getResult = (p) => {
    let result = 1
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (p[i][j] === 'P') {
          if (i + 1 < n && j + 1 < n && p[i + 1][j + 1] === 'P') {
            if (p[i + 1][j] !== 'X' || p[i][j + 1] !== 'X') return 0
          }
          if (i + 1 < n && p[i + 1][j] === 'P') return 0
          if (j + 1 < n && p[i][j + 1] === 'P') return 0
          if (i + 2 < n && p[i + 2][j] === 'P' && p[i + 1][j] !== 'X') return 0
          if (j + 2 < n && p[i][j + 2] === 'P' && p[i][j + 1] !== 'X') return 0
          if (i + 1 < n && j - 1 >= 0 && p[i + 1][j - 1] === 'P') {
            if (p[i + 1][j] !== 'X' || p[i][j - 1] !== 'X') return 0
          }
        }
      }
    }
    return result
  }

  places.forEach(place => {
    answer.push(getResult(place))
  })

  return answer;
}