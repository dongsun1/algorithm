function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let idx = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return arr
}

console.info(solution([13, 5, 11, 7, 23, 15]));