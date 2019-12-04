// const { S2Point, bboxST, tileXYFromUVZoom, tileXYFromSTZoom, tileHash } = require('./lib')
const { bboxST, tileHash } = require('./lib')

// [[0, 0, 0, 0, 0], [1, 0, 0, 0, 1], [2, 0, 0, 0, 0], [3, 0, 0, 0, 0], [4, 0, 0, 0, 0], [5, 0, 0, 0, 0]]
// console.log(tileHash(1, 0, 0, 0))

const x = bboxST(0, 0, 20)
// const f32 = new Float32Array([2147483650])
console.log(x)
// const testValue = parseFloat('-4.656612873077393e-11')
const testValue = x[2] / 4096
console.log('testValue', testValue)
const high = Math.fround(testValue)
const low = testValue - high
console.log('high', high)
console.log('low', low)
// const high = Math.floor(x[2] / 65536) * 65536
// const low = x[2] - high
// console.log('high', high)
// console.log('low', low)

// const point = S2Point.fromLonLat(0, -90)
//
// console.log(point)
//
// const [uvFace, u, v] = point.toUV()
// const [stFace, s, t] = point.toST()
//
// console.log(uvFace, u, v)
// console.log(stFace, s, t)
//
// const [uvX, uvY] = tileXYFromUVZoom(u, v, 7)
// const [stX, stY] = tileXYFromSTZoom(s, t, 7)
//
// console.log('tileUV x, y', uvX, uvY)
// console.log('tileST x, y', stX, stY)

// const point = S2Point.fromUVGL(0, 0, 0)
//
// console.log(point)
// console.log(point.toLonLat())
// point.normalize()
// console.log(point)

// console.log(bboxST(0, 1, 1))

// const point = S2Point.fromUV(2, -0.18854715000094013, 0.4666442956841952)
// const point = S2Point.fromUV(2, -0.1885538631847909, 0.466660910461718)

// console.log(quadraticUVtoST(0.017443409628616985))
// console.log(quadraticUVtoST(0.8694036545660797))

// console.log()
// console.log()
// console.log()
//
// const point2 = S2Point.fromST(4, 1, 1)
// console.log(point2)
// console.log(point2.toST())
