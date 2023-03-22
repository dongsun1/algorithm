function solution(data, col, row_begin, row_end) {
  var answer = 0;


  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) return b[0] - a[0]
    else return a[col - 1] - b[col - 1]
  })
  for (let i = row_begin - 1; i < row_end; i++) {
    let num = 0
    for (let j = 0; j < data[i].length; j++) {
      num += data[i][j] % (i + 1)
    }
    answer = answer ^ num
  }

  return answer;
}