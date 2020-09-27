// @flow
import type { Face } from './S2Projection'

export const EARTH_RADIUS = 6371008.8 // meters
export const EARTH_RADIUS_EQUATORIAL = 6378137 // meters
export const EARTH_RADIUS_POLAR = 6356752.3 // meters

export const MARS_RADIUS = 3389500 // meters
export const MARS_RADIUS_EQUATORIAL = 3396200 // meters
export const MARS_RADIUS_POLAR = 3376200 // meters

export function tileHash (f: Face, z: number, x: number, y: number) {
  const tileLength = (1 << z)
  const tileSize = tileLength * tileLength
  const xyz = tileLength * (tileLength + x) + y
  return f * (tileSize) + tileSize + xyz
}

export function radToDeg (radians: number): number {
  return radians * 180 / Math.PI
}

export function degToRad (deg: number): number {
  return deg * Math.PI / 180
}
