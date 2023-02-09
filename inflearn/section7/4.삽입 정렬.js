function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let idx = i
    for (let j = i - 1; j >= 0; j--) {
      if (arr[idx] < arr[j]) {
        [arr[idx], arr[j]] = [arr[j], arr[idx]]
        idx = j
      }
    }
  }

  return arr;
}

console.info(solution([11, 7, 5, 6, 10, 9]));