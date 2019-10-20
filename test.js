const { S2Point, bboxST, tileXYFromUVZoom, tileXYFromSTZoom } = require('./lib')

const point = S2Point.fromLonLat(0, -90)

console.log(point)

const [uvFace, u, v] = point.toUV()
const [stFace, s, t] = point.toST()

console.log(uvFace, u, v)
console.log(stFace, s, t)

const [uvX, uvY] = tileXYFromUVZoom(u, v, 7)
const [stX, stY] = tileXYFromSTZoom(s, t, 7)

console.log('tileUV x, y', uvX, uvY)
console.log('tileST x, y', stX, stY)

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

console.log()
console.log()
console.log()

const point2 = S2Point.fromST(4, 1, 1)
console.log(point2)
console.log(point2.toST())
