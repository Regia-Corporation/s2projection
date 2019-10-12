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
  radToDeg,
  degToRad
} from './S2Projection'
import {
  EARTH_RADIUS,
  EARTH_RADIUS_WIDE,
  EARTH_RADIUS_TALL
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
  radToDeg,
  degToRad,
  EARTH_RADIUS,
  EARTH_RADIUS_WIDE,
  EARTH_RADIUS_TALL
}

export type { Face } from './S2Projection'
