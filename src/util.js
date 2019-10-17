// @flow
export const EARTH_RADIUS = 6371.0088 // kilometers
export const EARTH_RADIUS_WIDE = 6378.137 // kilometers
export const EARTH_RADIUS_TALL = 6356.7523 // kilometers

export function tileHash (f: Face, z: number, x: number, y: number) {
  const tileLength = (1 << z)
  const tileSize = tileLength * tileLength
  const xyz = tileLength * (tileLength + x) + y
  return f * (tileSize) + tileSize + xyz
}
