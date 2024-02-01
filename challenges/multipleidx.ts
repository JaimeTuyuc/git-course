/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/

function multipleOfIndex(array: number[]): number[] {
  let temparr:number[] = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % i === 0) {
      temparr.push(array[i])
    } else if (array[i] === 0 && i === 0) {
      temparr.push(0)
    }
  }
  return temparr
  // return array.filter((v, i) => (v % i === 0) || !v)
}

multipleOfIndex([22, -6, 32, 82, 9, 25]) //, [-6, 32, 25])

multipleOfIndex([-56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68]) //, [-85, 72, 0, 68])

multipleOfIndex([0, 2, 3, 6, 9])












