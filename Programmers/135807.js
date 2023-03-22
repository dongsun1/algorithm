function solution(arrayA, arrayB) {
  const getMaxValue = (max, arrayA, arrayB) => {
    for (let i = max; i >= 2; i--) {
      let isOk = true;
      for (let j = 0; j < arrayA.length; j++) {
        const numA = arrayA[j];
        const numB = arrayB[j];

        if (numA % i !== 0 || numB % i === 0) {
          isOk = false;
          break;
        }
      }

      if (isOk) {
        return i
      }
    }

    return 0;
  }

  return Math.max(getMaxValue(arrayA[0], arrayA, arrayB), getMaxValue(arrayB[0], arrayB, arrayA));
}