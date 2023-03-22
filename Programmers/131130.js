function solution(cards) {
  var answer = 0;
  const arr = [];

  const visited = Array.from({ length: cards.length }, () => false)

  for (let i = 0; i < cards.length; i++) {
    if (!visited[i]) {
      visited[i] = true
      let num = 0
      const queue = []
      queue.push(cards[i])

      while (queue.length) {
        num++
        const idx = queue.shift() - 1
        if (!visited[idx]) {
          visited[idx] = true
          queue.push(cards[idx])
        }
      }
      arr.push(num)
    }
  }

  if (arr.length === 1) return 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      answer = Math.max(answer, arr[i] * arr[j])
    }
  }
  return answer;
}