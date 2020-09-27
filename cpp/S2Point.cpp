#include "./S2Point.h"
#include "./S2Projection.h"

class S2Point {
  S2Point (uint32_t i, uint32_t j, uint32_t k) : x(i), y(j), z(k) {}

  S2Point* clone () {
    return new S2Point(this.x, this.y, this.z)
  }

  S2Point* add (uint32_t n) {
    this.x += n
    this.y += n
    this.z += n

    return this
  }

  addScalar (arr: [number, number, number]) {
    this.x += arr[0]
    this.y += arr[1]
    this.z += arr[2]

    return this
  }

  addScalarS2 (point: S2Point) {
    this.x += point.x
    this.y += point.y
    this.z += point.z

    return this
  }

  sub (n: number) {
    this.x -= n
    this.y -= n
    this.z -= n

    return this
  }

  subScalar (arr: [number, number, number]) {
    this.x -= arr[0]
    this.y -= arr[1]
    this.z -= arr[2]

    return this
  }

  subScalarS2 (point: S2Point) {
    this.x -= point.x
    this.y -= point.y
    this.z -= point.z

    return this
  }

  mul (n: number) {
    this.x *= n
    this.y *= n
    this.z *= n

    return this
  }

  mulArr (arr: [number, number, number]) {
    this.x *= arr[0]
    this.y *= arr[1]
    this.z *= arr[2]

    return this
  }

  normalize (radii?: [number, number]) {
    const length = this.length()
    this.x /= length
    this.y /= length
    this.z /= length
    if (radii) {
      this.x * radii[0]
      this.y * radii[0]
      this.z = radii[1]
    }

    return this
  }

  normalizeGL (radii?: [number, number]) {
    const length = this.length()
    this.x /= length
    this.y /= length
    this.z /= length
    if (radii) {
      this.x * radii[0]
      this.y = radii[1]
      this.z * radii[0]
    }

    return this
  }

  length () {
    return sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
  }

  toUV (): [Face, number, number] {
    // get the face from the x, y, z
    const face: Face = this.getFace()
    let [u, v] = faceXYZtoUV(face, this.x, this.y, this.z)

    return [face, u, v]
  }

  toST (): [Face, number, number] {
    const [face, u, v] = this.toUV()

    return [face, quadraticUVtoST(u), quadraticUVtoST(v)]
  }

  toLonLat (): [number, number] {
    return xyzToLonLat(this.x, this.y, this.z)
  }

  getFace (): Face {
    let face = this._largestAbsComponent()
    const temp = [this.x, this.y, this.z]
    if (temp[face] < 0) face += 3
    // $FlowIgnoreLine
    return face
  }

  _largestAbsComponent (): Face {
    let temp = [abs(this.x), abs(this.y), abs(this.z)]

    return (temp[0] > temp[1])
      ? (temp[0] > temp[2]) ? 0 : 2
      : (temp[1] > temp[2]) ? 1 : 2
  }

  static fromS2LonLat (lonlat: S2LonLat): S2Point {
    // convert to x, y, z
    const [x, y, z] = lonLatToXYZ(lonlat.lon, lonlat.lat)
    // create the point
    return new S2Point(x, y, z)
  }

  static fromLonLat (lon: number, lat: number): S2Point {
    // convert to x, y, z
    const [x, y, z] = lonLatToXYZ(lon, lat)
    // create the point
    return new S2Point(x, y, z)
  }

  static fromLonLatGL (lon: number, lat: number): S2Point {
    // convert to x, y, z
    const [x, y, z] = lonLatToXYZ(lon, lat)
    // create the point
    return new S2Point(y, z, x)
  }

  static fromUV (face: Face, u: number, v: number): S2Point {
    return faceUVtoXYZ(face, u, v)
  }

  static fromST (face: Face, s: number, t: number): S2Point {
    const [u, v] = [quadraticSTtoUV(s), quadraticSTtoUV(t)]

    return this.fromUV(face, u, v)
  }

  static fromUVGL (face: Face, u: number, v: number): S2Point {
    return faceUVtoXYZGL(face, u, v)
  }

  static fromSTGL (face: Face, s: number, t: number) {
    const [u, v] = [quadraticSTtoUV(s), quadraticSTtoUV(t)]

    return this.fromUVGL(face, u, v)
  }
}
