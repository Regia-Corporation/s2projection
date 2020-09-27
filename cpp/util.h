#ifndef UTIL
#define UTIL

#include <math.h>
#include <stdint.h>

#define EARTH_RADIUS 6371008.8 // meters
#define EARTH_RADIUS_EQUATORIAL 6378137. // meters
#define EARTH_RADIUS_POLAR 6356752.3 // meters

#define MARS_RADIUS 3389500. // meters
#define MARS_RADIUS_EQUATORIAL 3396200. // meters
#define MARS_RADIUS_POLAR 3376200. // meters

float tileHash (uint32_t f, uint32_t z, uint32_t x, uint32_t y);

float radToDeg (float radians);

float degToRad (float deg);

#endif
