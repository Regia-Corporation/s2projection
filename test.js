// const { S2Point, bboxST, tileXYFromUVZoom, tileXYFromSTZoom, tileHash } = require('./lib')
const { S2Point, tileXYFromSTZoom, bboxST } = require('./lib')

// -112.150548, 40.523090

// 5, 8, 63, 166 [face, zoom, x, y] -> [ -61.127575825959816, -64.13792714316762, -61.38718822617137, -64.60955876095235 ]
// 5, 8, 63, 166 [face, zoom, x, y]

// const point = S2Point.fromLonLat(-112.150548, 40.525).toST()
// const tile = tileXYFromSTZoom(point[1], point[2], 11)
// const bbox = bboxST(...tile, 11)
// const llBBOX = [
//   ...(S2Point.fromST(point[0], bbox[0], bbox[3])).toLonLat(), // face, s, t
//   ...(S2Point.fromST(point[0], bbox[2], bbox[1])).toLonLat()
// ]
// console.log('s, t', point)
// console.log('tile', `${point[0]} - 11 - ${tile[0]} - ${tile[1]}`)
// console.log('st bbox', bbox)
// console.log('ll bbox', llBBOX)

// const bbox = bboxST(762, 669, 10)
//
// const llBBOX = [
//   ...(S2Point.fromST(5, bbox[0], bbox[1])).toLonLat(), // face, s, t
//   ...(S2Point.fromST(5, bbox[2], bbox[3])).toLonLat()
// ]
//
// console.log('st bbox', bbox)
// console.log('ll bbox', llBBOX)




let point = S2Point.fromLonLat(((-60.3 + -59.1) / 2), ((-65 + -64.6) / 2))
console.log(point)
// let [face, s, t] = point.toST()

// let [x, y] = tileXYFromSTZoom(s, t, 10)
//
// console.log(face, s, t)
// console.log(10, x, y)












// const ZOOM = 5

// 36.347791, -112.457758

// const xyzTable = [{ x: 1 }, { y: 1 }, { z: 1 }, { x: -1 }, { y: -1 }, { z: -1 }]
//
// const pos = S2Point.fromST(5, 0.5, 0.5)
// console.log(pos)
// const s2point = S2Point.fromST(0, -0.3, 0.5)
// console.log(s2point.toST())
// const [u, v] = faceXYZtoUV(0, s2point.x, s2point.y, s2point.z)
// const [s, t] = [quadraticUVtoST(u), quadraticUVtoST(v)]
// console.log(0, s, t)
// const tile = tileXYFromSTZoom(s, t, ZOOM)
// console.log('tile', [face, tile[0], tile[1]])

// [[0, 0, 0, 0, 0], [1, 0, 0, 0, 1], [2, 0, 0, 0, 0], [3, 0, 0, 0, 0], [4, 0, 0, 0, 0], [5, 0, 0, 0, 0]]
// console.log(tileHash(1, 0, 0, 0))

// const bbox = bboxST(0, 0, 6)
// const ds = (bbox[2] - bbox[0]) / 4096
// const dt = (bbox[3] - bbox[1]) / 4096
// // const f32 = new Float32Array([2147483650])
// console.log(bbox)
// // const testValue = parseFloat('-4.656612873077393e-11')
// const point = S2Point.fromSTGL(0, ds * 124 + bbox[0], dt * 62 + bbox[1])
// console.log('point', point)
// point.normalize()
// // point.x *= 6371.0088
// // point.y *= 6371.0088
// // point.z *= 6371.0088
// const testValue = point.x
// console.log('testValue', testValue)
// const high = Math.fround(testValue)
// const low = testValue - high
// console.log('high', high)
// console.log('low', low)
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
