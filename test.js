const { S2Point, bboxST, tileXYFromSTZoom } = require('./lib').default

const point = S2Point.fromLonLat(-98.26171875, 39.027718840211605)

console.log(point)
console.log(point.toUV())
const [face, s, t] = point.toST()
console.log(face, s, t)
const [x, y] = tileXYFromSTZoom(s, t, 7)
console.log('tile x, y', x, y)

// const point = S2Point.fromUVGL(0, 0, 0)
//
// console.log(point)
// console.log(point.toLonLat())
// point.normalize()
// console.log(point)

console.log(bboxST(0, 1, 1))

// const point = S2Point.fromUV(2, -0.18854715000094013, 0.4666442956841952)
// const point = S2Point.fromUV(2, -0.1885538631847909, 0.466660910461718)

// console.log(quadraticUVtoST(0.017443409628616985))
// console.log(quadraticUVtoST(0.8694036545660797))
