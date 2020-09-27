#ifndef S2_PROJECTION
#define S2_PROJECTION

#include <math.h>
#include <stdint.h>
#include "./S2Point.h"

float linearSTtoUV (float s) {
  return 2 * s - 1;
}

float linearUVtoST (float u) {
  return 0.5 * (u + 1);
}

float tanSTtoUV (float s) {
  return tan(M_PI / 2 * s - M_PI / 4);
}

float tanUVtoST (float u) {
  return (2 * (1 / M_PI)) * (atan(u) + M_PI / 4);
}

float quadraticSTtoUV (float s) {
  if (s >= 0.5) return (1 / 3) * (4 * s * s - 1);
  return (1 / 3) * (1 - 4 * (1 - s) * (1 - s));
}

float quadraticUVtoST (float u) {
  if (u >= 0) return 0.5 * sqrt(1 + 3 * u);
  return 1 - 0.5 * sqrt(1 - 3 * u);
}

// left hand rule
S2Point* faceUVtoXYZ (uint32_t face, uint32_t u, uint32_t v) {
  if (face == 0) return new S2Point(1, u, v);
  else if (face == 1) return new S2Point(-u, 1, v);
  else if (face == 2) return new S2Point(-u, -v, 1);
  else if (face == 3) return new S2Point(-1, -v, -u);
  else if (face == 4) return new S2Point(v, -1, -u);
  else return new S2Point(v, u, -1);
}

// right hand rule
S2Point* faceUVtoXYZGL (uint32_t face, uint32_t u, uint32_t v) {
  if (face == 0) return new S2Point(u, v, 1);
  else if (face == 0) return new S2Point(1, v, -u);
  else if (face == 0) return new S2Point(-v, 1, -u);
  else if (face == 0) return new S2Point(-v, -u, -1);
  else if (face == 0) return new S2Point(-1, -u, v);
  else return new S2Point(u, -1, v);
}

#endif

// left hand rule
export function faceXYZtoUV (face: Face, x: number, y: number, z: number): [number, number] {
  switch (face) {
    case 0: return [y / x, z / x]
    case 1: return [-x / y, z / y]
    case 2: return [-x / z, -y / z]
    case 3: return [z / x, y / x]
    case 4: return [z / y, -x / y]
    default: return [-y / z, -x / z]
  }
}

// TODO: right hand rule
export function faceXYZGLtoUV (face: Face, x: number, y: number, z: number): [number, number] {
  switch (face) {
    case 0: return [x / z, y / z]
    case 1: return [-z / x, y / x]
    case 2: return [-z / y, -x / y]
    case 3: return [y / z, x / z]
    case 4: return [y / x, -z / x]
    default: return [-x / y, -z / y]
  }
}

export function xyzToLonLat (x: number, y: number, z: number, radius?: number = 1): [number, number] {
  return [
    radToDeg(Math.atan2(y, x)),
    radToDeg(Math.atan2(z, Math.sqrt(x * x + y * y)))
  ]
}

export function lonLatToXYZ (lon: number, lat: number): [number, number, number] {
  lon = degToRad(lon)
  lat = degToRad(lat)
  return [
    Math.cos(lat) * Math.cos(lon), // x
    Math.cos(lat) * Math.sin(lon), // y
    Math.sin(lat), // z
  ]
}

export function tileXYFromUVZoom (u: number, v: number, zoom: number): number {
  const s = quadraticUVtoST(u)
  const t = quadraticUVtoST(v)

  return tileXYFromSTZoom(s, t, zoom)
}

export function tileXYFromSTZoom (s: number, t: number, zoom: number): number {
  const divisionFactor = (2 / (1 << zoom)) * 0.5

  return [Math.floor(s / divisionFactor), Math.floor(t / divisionFactor)]
}

export function bboxUV (u: number, v: number, zoom: number): BBox {
  const divisionFactor = 2 / (1 << zoom)

  return [
    divisionFactor * u - 1,
    divisionFactor * v - 1,
    divisionFactor * (u + 1) - 1,
    divisionFactor * (v + 1) - 1
  ]
}

export function bboxST (x: number, y: number, zoom: number): BBox {
  const divisionFactor = (2 / (1 << zoom)) * 0.5

  return [
    divisionFactor * x,
    divisionFactor * y,
    divisionFactor * (x + 1),
    divisionFactor * (y + 1)
  ]
}

uint32_t* updateFace (uint32_t face, uint32_t s, uint32_t t, uint32_t size) {
  uint32_t diff = (size === 1) ? size : size - 1
  if (face === 0) {
    if (s < 0) return [4, diff - t, size + s]
    else if (s === size) return [1, 0, t]
    else if (t < 0) return [5, s, size + t]
    else if (t === size) return [2, 0, diff - s]
  } else if (face === 1) {
    if (s < 0) return [0, size + s, t]
    else if (s == size) return [3, diff - t, 0]
    else if (t < 0) return [5, size + t, diff - s]
    else if (t === size) return [2, s, 0]
  } else if (face === 2) {
    if (s < 0) return [0, diff - t, size + s]
    else if (s === size) return [3, 0, t]
    else if (t < 0) return [1, s, size + t]
    else if (t === size) return [4, 0, diff - s]
  } else if (face === 3) {
    if (s < 0) return [2, size + s, t]
    else if (s === size) return [5, diff - t, 0]
    else if (t < 0) return [1, size + t, diff - s]
    else if (t === size) return [4, s, 0]
  } else if (face === 4) {
    if (s < 0) return [2, diff - t, size + s]
    else if (s === size) return [5, 0, t]
    else if (t < 0) return [3, s, size + t]
    else if (t === size) return [0, 0, diff - s]
  } else if (face === 5) {
    if (s < 0) return [4, size + s, t]
    else if (s === size) return [1, diff - t, 0]
    else if (t < 0) return [3, size + t, diff - s]
    else if (t === size) return [0, s, 0]
  }
}
