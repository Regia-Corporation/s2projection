// @flow
/** COMPONENTS **/
import {
  quadraticSTtoUV as STtoUV,
  quadraticUVtoST as UVtoST,
  faceUVtoXYZ,
  faceXYZtoUV,
  faceUVtoXYZGL,
  lonLatToXYZ,
  xyzToLonLat
} from './S2Projection'
import S2LonLat from './S2LonLat'

/** TYPES **/
import type { Face } from './S2Projection'

export default class S2Point {
  x: number
  y: number
  z: number
  constructor (x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }

  add (n: number) {
    this.x += n
    this.y += n
    this.z += n
  }

  addScalar (arr: [number, number, number]) {
    this.x += arr[0]
    this.y += arr[1]
    this.z += arr[2]
  }

  sub (n: number) {
    this.x -= n
    this.y -= n
    this.z -= n
  }

  subScalar (arr: [number, number, number]) {
    this.x -= arr[0]
    this.y -= arr[1]
    this.z -= arr[2]
  }

  mul (n: number) {
    this.x *= n
    this.y *= n
    this.z *= n
  }

  mulArr (arr: [number, number, number]) {
    this.x *= arr[0]
    this.y *= arr[1]
    this.z *= arr[2]
  }

  normalize () {
    const length = this.length()
    this.x /= length
    this.y /= length
    this.z /= length
  }

  length () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
  }

  toUV (): [Face, number, number] {
    // get the face from the x, y, z
    const face: Face = this.getFace()
    let [u, v] = faceXYZtoUV(face, this.x, this.y, this.z)
    return [face, u, v]
  }

  toST (): [Face, number, number] {
    const [face, u, v] = this.toUV()

    return [face, UVtoST(u), UVtoST(v)]
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
    let temp = [Math.abs(this.x), Math.abs(this.y), Math.abs(this.z)]

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

  static fromUV (face: Face, u: number, v: number): S2Point {
    return faceUVtoXYZ(face, u, v)
  }

  static fromST (face: Face, s: number, t: number): S2Point {
    const [u, v] = [STtoUV(s), STtoUV(t)]

    return this.fromUV(face, u, v)
  }

  static fromUVGL (face: Face, u: number, v: number): S2Point {
    return faceUVtoXYZGL(face, u, v)
  }

  static fromSTGL (face: Face, s: number, t: number) {
    const [u, v] = [STtoUV(s), STtoUV(t)]

    return this.fromUVGL(face, u, v)
  }
}
