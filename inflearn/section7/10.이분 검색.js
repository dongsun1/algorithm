function solution(target, arr) {
  let answer = 0
  arr.sort()

  let lt = 0
  let rt = arr.length - 1
  while (true) {
    const mid = Math.floor((rt + lt) / 2)

    if (arr[mid] === target) {
      answer = mid + 1
      break
    }
    if (arr[mid] > target) rt = mid
    else lt = mid
  }

  return answer;
}

console.info(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));