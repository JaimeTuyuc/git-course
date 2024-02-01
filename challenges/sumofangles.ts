/*
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
*/

function angle(n: number): number {
  // n - 2 * 180
  return (n - 2) * 180
}

angle(3) //, 180)
angle(4) //, 360)