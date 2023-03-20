function solution(m, n, startX, startY, balls) {
  var answer = [];

  balls.forEach(ball => {
    const [x, y] = ball
    const xLeft = (startX + x) ** 2 + (startY - y) ** 2
    const xRight = (startX - (2 * m - x)) ** 2 + (startY - y) ** 2
    const yTop = (startX - x) ** 2 + (startY - (2 * n - y)) ** 2
    const yBottom = (startX - x) ** 2 + (startY + y) ** 2

    if (startX < x && startY === y) {
      answer.push(Math.min(xLeft, yTop, yBottom))
    } else if (startX > x && startY === y) {
      answer.push(Math.min(xRight, yTop, yBottom))
    } else if (startY > y && startX === x) {
      answer.push(Math.min(xLeft, xRight, yTop))
    } else if (startY < y && startX === x) {
      answer.push(Math.min(xLeft, xRight, yBottom))
    } else {
      answer.push(Math.min(xLeft, xRight, yTop, yBottom))
    }
  })

  return answer;
}