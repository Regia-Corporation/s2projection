// @flow
// when converting from a sphere x,y,z cartesian coordinate to a cube map,
// we cut the cube open according to the axis of study, and flatten.
// so if 0 is the current face, and y the axis we slice along:
// it goes 5->0->2->3, with 4 on the left, and 1 on the right.
import type { Face } from './'

const faceRuleSet = { // $FlowIgnoreLine
  0: { // face
    0: { // axis
      1: { // face
        rot: 0,
        x: 1,
        y: 0
      },
      2: {
        rot: 90,
        x: 0,
        y: 1
      },
      3: {
        rot: -90,
        x: 2,
        y: 0
      },
      4: {
        rot: -90,
        x: -1,
        y: 0
      },
      5: {
        rot: 0,
        x: 0,
        y: -1
      }
    },
    1: { // axis
      1: { // face
        rot: 0,
        x: 1,
        y: 0
      },
      2: { // face
        rot: 90,
        x: 0,
        y: 1
      },
      3: { // face
        rot: 90,
        x: 0,
        y: 2
      },
      4: { // face
        rot: -90,
        x: -1,
        y: 0
      },
      5: { // face
        rot: 0,
        x: 0,
        y: -1
      }
    }
  },
  // $FlowIgnoreLine
  1: {
    0: { // axis
      0: {
        rot: 0,
        x: -1,
        y: 0
      },
      2: {
        rot: 0,
        x: 0,
        y: 1
      },
      3: {
        rot: -90,
        x: 1,
        y: 0
      },
      4: {
        rot: -90,
        x: 2,
        y: 0
      },
      5: {
        rot: 90,
        x: 0,
        y: -1
      }
    },
    1: { // axis
      0: {
        rot: 0,
        x: -1,
        y: 0
      },
      2: {
        rot: 0,
        x: 0,
        y: 1
      },
      3: {
        rot: -90,
        x: 1,
        y: 0
      },
      4: {
        rot: 90,
        x: 0,
        y: 2
      },
      5: {
        rot: 90,
        x: 0,
        y: -1
      }
    }
  },
  // $FlowIgnoreLine
  2: {
    0: { // axis
      0: {
        rot: -90,
        x: -1,
        y: 0
      },
      1: {
        rot: 0,
        x: 0,
        y: -1
      },
      3: {
        rot: 0,
        x: 1,
        y: 0
      },
      4: {
        rot: 90,
        x: 0,
        y: 1
      },
      5: {
        rot: -90,
        x: 2,
        y: 0
      }
    },
    1: { // axis
      0: {
        rot: -90,
        x: -1,
        y: 0
      },
      1: {
        rot: 0,
        x: 0,
        y: -1
      },
      3: {
        rot: 0,
        x: 1,
        y: 0
      },
      4: {
        rot: 90,
        x: 0,
        y: 1
      },
      5: {
        rot: 90,
        x: 0,
        y: 2
      }
    }
  },
  // $FlowIgnoreLine
  3: {
    0: { // axis
      0: {
        rot: -90,
        x: 2,
        y: 0
      },
      1: {
        rot: 90,
        x: 0,
        y: -1
      },
      2: {
        rot: 0,
        x: -1,
        y: 0
      },
      4: {
        rot: 0,
        x: 0,
        y: 1
      },
      5: {
        rot: -90,
        x: 1,
        y: 0
      }
    },
    1: { // axis
      0: {
        rot: 90,
        x: 0,
        y: 2
      },
      1: {
        rot: 90,
        x: 0,
        y: -1
      },
      2: {
        rot: 0,
        x: -1,
        y: 0
      },
      4: {
        rot: 0,
        x: 0,
        y: 1
      },
      5: {
        rot: -90,
        x: 1,
        y: 0
      }
    }
  },
  // $FlowIgnoreLine
  4: {
    0: { // axis
      0: {
        rot: 90,
        x: 0,
        y: 1
      },
      1: {
        rot: -90,
        x: 2,
        y: 0
      },
      2: {
        rot: -90,
        x: -1,
        y: 0
      },
      3: {
        rot: 0,
        x: 0,
        y: -1
      },
      5: {
        rot: 0,
        x: 1,
        y: 0
      }
    },
    1: { // axis
      0: {
        rot: 90,
        x: 0,
        y: 1
      },
      1: {
        rot: 90,
        x: 0,
        y: 2
      },
      2: {
        rot: -90,
        x: -1,
        y: 0
      },
      3: {
        rot: 0,
        x: 0,
        y: -1
      },
      5: {
        rot: 0,
        x: 1,
        y: 0
      }
    }
  },
  // $FlowIgnoreLine
  5: {
    0: { // axis
      0: {
        rot: 0,
        x: 0,
        y: 1
      },
      1: {
        rot: -90,
        x: 1,
        y: 0
      },
      2: {
        rot: -90,
        x: 2,
        y: 0
      },
      3: {
        rot: 90,
        x: 0,
        y: -1
      },
      4: {
        rot: 0,
        x: -1,
        y: 0
      }
    },
    1: { // axis
      0: {
        rot: 0,
        x: 0,
        y: 1
      },
      1: {
        rot: -90,
        x: 1,
        y: 0
      },
      2: {
        rot: 90,
        x: 0,
        y: 2
      },
      3: {
        rot: 90,
        x: 0,
        y: -1
      },
      4: {
        rot: 0,
        x: -1,
        y: 0
      }
    }
  }
}

// get position relative to a face
export default function getPosFromFace (face: Face, axis: 0 | 1, stPoint: [Face, number, number]): [number, number] {
  const [curFace, s, t] = stPoint
  // trivial case: if already face of interest, return the point
  if (face === curFace) return [s, t]
  // first grab the conversion material
  const { rot, x, y } = faceRuleSet[face][axis][curFace]
  // give the rules, create a new s, t position via rotation than addition
  let [newS, newT] = rotate(rot, s, t)
  newS += x
  newT += y

  return [newS, newT]
}

// rotate around [0.5, 0.5]
// https://stackoverflow.com/questions/4465931/rotate-rectangle-around-a-point
function rotate (rot: 90 | -90, s: number, t: number): [number, number] {
  const angle = rot * Math.PI / 180.0

  return [
    Math.cos(angle) * (s - 0.5) - Math.sin(angle) * (t - 0.5) + 0.5,
    Math.sin(angle) * (s - 0.5) + Math.cos(angle) * (t - 0.5) + 0.5
  ]
}
