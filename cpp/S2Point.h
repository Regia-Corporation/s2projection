#ifndef S2_POINT
#define S2_POINT

#include <math.h>
#include <stdint.h>

class S2Point {
  public:
    S2Point (uint32_t x, uint32_t y, uint32_t z);

  protected:
    uint32_t x;
    uint32_t y;
    uint32_t z;
};

#endif
