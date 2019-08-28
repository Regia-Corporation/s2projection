const { S2Point } = require('./lib').default

// const point = S2Point.fromLonLat(-98.26171875, 39.027718840211605)
//
// console.log(point)
// console.log(point.toUV())
// console.log(point.toST())

const point = S2Point.fromUV(0, 1, 0)

console.log(point)
console.log(point.toLonLat())
point.normalize()
console.log(point)
