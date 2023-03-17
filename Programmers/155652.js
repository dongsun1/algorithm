function solution(s, skip, index) {
  var answer = '';

  const alpabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  skip = skip.split('')

  for (let i = 0; i < s.length; i++) {
    let idx = alpabet.indexOf(s[i])
    let cnt = 0

    while (true) {
      idx++
      cnt++
      if (idx === alpabet.length) idx = 0
      if (skip.includes(alpabet[idx])) {
        cnt--
      } else if (cnt === index) {
        answer += alpabet[idx]
        break
      }
    }
  }

  return answer;
}