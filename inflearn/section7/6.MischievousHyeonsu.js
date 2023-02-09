function solution(arr) {
  const answer = [0, 0]
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      answer[0] = i + 1
      break
    }
  }

  for (let i = arr.length; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      answer[1] = i + 1
      break
    }
  }

  return answer;
}

console.info(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));