#include "util.h"

float tileHash (uint32_t f, uint32_t z, uint32_t x, uint32_t y) {
  float tileLength = (1 << z);
  float tileSize = tileLength * tileLength;
  float xyz = tileLength * (tileLength + x) + y;
  return f * (tileSize) + tileSize + xyz;
}

float radToDeg (float radians) {
  return radians * 180. / M_PI;
}

float degToRad (float deg) {
  return deg * M_PI / 180.;
}
