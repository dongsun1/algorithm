function solution(size, arr) {
  const cache = []
  for (let i = 0; i < arr.length; i++) {
    const idx = cache.indexOf(arr[i])
    if (idx !== -1) {
      for (let j = idx; j > 0; j--) {
        [cache[j], cache[j - 1]] = [cache[j - 1], cache[j]]
      }
    } else {
      cache.unshift(arr[i])
      if (cache.length > size) cache.pop()
    }
  }

  return cache;
}

console.info(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));