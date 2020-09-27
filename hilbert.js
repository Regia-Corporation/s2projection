// convert (x,y) to d
function xy2d (n, x, y) {
  let rx, ry, s
  let d = 0
  for (s = n / 2; s > 0; s /= 2) {
    rx = ~~((x & s) > 0)
    ry = ~~((y & s) > 0)
    d += s * s * ((3 * rx) ^ ry);
    [x, y] = rot(n, x, y, rx, ry)
  }

  return d
}

// rotate/flip a quadrant appropriately
function rot (n, x, y, rx, ry) {
  if (ry === 0) {
    if (rx === 1) {
      x = n - 1 - x
      y = n - 1 - y
    }

    // Swap x and y
    const t = x
    x = y
    y = t
  }
  return [x, y]
}

console.time('test')
const res = xy2d((1 << 26), (1 << 26) - 1, (1 << 26) - 1)
console.timeEnd('test')

console.log(res)
