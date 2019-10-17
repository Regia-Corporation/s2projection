// @flow
import { default as S2LonLat } from './S2LonLat'
import { default as S2Point } from './S2Point'
import {
  linearSTtoUV,
  linearUVtoST,
  tanSTtoUV,
  tanUVtoST,
  quadraticSTtoUV,
  quadraticUVtoST,
  faceUVtoXYZ,
  faceXYZtoUV,
  faceXYZGLtoUV,
  xyzToLonLat,
  lonLatToXYZ,
  tileXYFromUVZoom,
  bboxUV,
  tileXYFromSTZoom,
  bboxST,
  updateFace,
  radToDeg,
  degToRad
} from './S2Projection'
import {
  EARTH_RADIUS,
  EARTH_RADIUS_WIDE,
  EARTH_RADIUS_TALL,
  tileHash
} from './util'

export default {
  S2LonLat,
  S2Point,
  linearSTtoUV,
  linearUVtoST,
  tanSTtoUV,
  tanUVtoST,
  quadraticSTtoUV,
  quadraticUVtoST,
  faceUVtoXYZ,
  faceXYZtoUV,
  faceXYZGLtoUV,
  xyzToLonLat,
  lonLatToXYZ,
  tileXYFromUVZoom,
  bboxUV,
  tileXYFromSTZoom,
  bboxST,
  updateFace,
  radToDeg,
  degToRad,
  EARTH_RADIUS,
  EARTH_RADIUS_WIDE,
  EARTH_RADIUS_TALL,
  tileHash
}

export type { Face } from './S2Projection'
