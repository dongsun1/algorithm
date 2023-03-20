function solution(keymap, targets) {
  var answer = [];

  targets.forEach(target => {
    let sum = 0
    for (let i = 0; i < target.length; i++) {
      let min = Infinity
      for (let j = 0; j < keymap.length; j++) {
        const idx = keymap[j].indexOf(target[i])
        if (idx !== -1) {
          min = Math.min(min, keymap[j].indexOf(target[i]) + 1)
        }
      }
      sum += min
    }
    answer.push(sum)
  })

  return answer.map(o => {
    if (o === Infinity) return -1
    else return o
  });
}