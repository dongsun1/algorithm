function solution(cards1, cards2, goal) {
  var answer = 'Yes';

  goal.forEach(g => {
    if (cards1[0] === g) {
      cards1.shift()
    } else if (cards2[0] === g) {
      cards2.shift()
    } else {
      return answer = 'No'
    }
  })

  return answer;
}