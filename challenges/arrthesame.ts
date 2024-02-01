/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
*/
function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (!a1 || !a2) return false
  const sorteda2 = a2?.sort((a, b) => a - b) ?? [];
  const sorteda1 = a1?.sort((a, b) => a - b) ?? [];
  const newarr = sorteda1.reduce((acc: number[], n: number, idx: number) => {
    const newN = n * n
    if (sorteda2[idx] === newN) {
      return acc.concat(newN)
    }
    return acc
  }, [])
  return newarr.length === sorteda2.length
}

const a1: number[] = [121, 144, 19, 161, 19, 144, 19, 11];
const a2: number[] = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
comp(a1, a2) //, true);

const a11 = [121, 144, 19, 161, 19, 144, 19, 11];
const a22 = [11 * 21, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
comp(a11, a22) //, false);

/*
[121,144,19,161,19,144,19,11] / [121,14641,20736,36100,25921,361,20736,361]
*/
comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361])


