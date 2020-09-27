function overlap (a, b) { // vec4(left, bottom, right, top)
  // return !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom)
  if (a.left >= b.right || b.left >= a.right) return false
  if (a.top <= b.bottom || b.top <= a.bottom) return false
  return true
}

const a = {
  left: 0.1275642067193985,
  bottom: 0.026881027966737747,
  right: 0.22239041328430176,
  top: 0.09606342017650604
}

const b = {
  left: -0.048465922474861145,
  bottom: 0.0022528693079948425,
  right: 0.007593195885419846,
  top: 0.07143525779247284
}

console.log(overlap(a, b))

// 0.1275642067193985, 0.026881027966737747, 0.22239041328430176, 0.09606342017650604
// -0.048465922474861145, 0.0022528693079948425, 0.007593195885419846, 0.07143525779247284


// 0, 0, 0, 0, -0.0876806452870369, 0.5566409826278687, 0.131285160779953, 0.6373665928840637



// bool doOverlap(Point l1, Point r1, Point l2, Point r2)
// {
//     // If one rectangle is on left side of other
//     if (l1.x >= r2.x || l2.x >= r1.x)
//         return false;
//
//     // If one rectangle is above other
//     if (l1.y <= r2.y || l2.y <= r1.y)
//         return false;
//
//     return true;
// }
