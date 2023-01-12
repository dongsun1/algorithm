function solution(today, terms, privacies) {
  var answer = [];
  today = today.split('.').map(Number)
  const todayTime = today[0] * 12 * 28 + today[1] * 28 + today[2]

  const map = terms.reduce((acc, term) => {
    const [key, value] = term.split(' ')

    acc.set(key, value * 28)
    return acc
  }, new Map())

  privacies.forEach((o, i) => {
    const [date, num] = o.split(' ')

    const [year, month, day] = date.split('.').map(Number)

    const time = year * 12 * 28 + month * 28 + day
    console.info(todayTime + map.get(num));
    console.info(time);
    if (todayTime >= time + map.get(num)) answer.push(i + 1)
  })

  return answer;
}