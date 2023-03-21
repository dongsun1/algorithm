function solution(book_time) {
  book_time.sort((a, b) => {
    const [aH, aM] = a[0].split(':').map(Number)
    const [bH, bM] = b[0].split(':').map(Number)

    const aTime = aH * 60 + aM
    const bTime = bH * 60 + bM

    return aTime - bTime
  })

  const rooms = []

  book_time.forEach(([start, end]) => {
    const [sH, sM] = start.split(':').map(Number)
    const [eH, eM] = end.split(':').map(Number)

    const startTime = sH * 60 + sM
    const endTime = eH * 60 + eM + 10

    if (!rooms.length) {
      rooms.push(endTime)
    } else {
      let index = 0
      let check = true

      for (let i = 0; i < rooms.length; i++) {
        if (rooms[i] <= startTime) {
          index = i
          check = false
          break
        }
      }

      if (check) {
        rooms.push(endTime)
      } else {
        rooms[index] = endTime
      }

    }
  })

  return rooms.length;
}