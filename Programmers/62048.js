function solution(w, h) {
  const gcd = (x, y) => {
    const z = x % y
    if (z === 0) return y
    return gcd(y, z)
  }

  return w * h - (w + h - gcd(w, h));
}