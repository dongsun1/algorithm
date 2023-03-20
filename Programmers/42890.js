function solution(relation) {
  const arr = Array.from({ length: relation[0].length }, (_, i) => i)

  const checkKey = (c) => {
    const tmp = []

    for (let i = 0; i < relation.length; i++) {
      let tmpStr = ''

      for (let j = 0; j < c.length; j++) {
        tmpStr += relation[i][c[j]]
      }
      if (tmp.includes(tmpStr)) {
        return false
      } else tmp.push(tmpStr)
    }

    return true
  }

  const ans = []

  const getCombinations = (array, selectNumber) => {
    const results = [];
    if (selectNumber === 1) {
      return array.map((element) => [element]);
    }
    array.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((combination) => [fixed, ...combination]);
      results.push(...attached);
    });
    return results;
  }


  for (let i = 0; i < relation[0].length + 1; i++) {
    const combi = getCombinations(arr, i)
    for (let j = 0; j < combi.length; j++) {
      if (checkKey(combi[j])) {
        ans.push(combi[j])
      }
    }
  }

  const isSubsetOf = (base, sample) => {
    let count = 0;
    for (let i = 0; i < sample.length; i++) {
      for (let j = 0; j < base.length; j++) {
        if (sample[i] === base[j]) {
          count++;
        }
      }
    }
    return count === sample.length;
  }

  const subCheckArr = Array.from({ length: ans.length }, () => true)

  for (let i = 0; i < ans.length; i++) {
    for (let j = i + 1; j < ans.length; j++) {
      if (subCheckArr[j] && isSubsetOf(ans[j], ans[i])) {
        subCheckArr[j] = false
      }
    }
  }

  return subCheckArr.filter(o => o).length;
}