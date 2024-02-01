/*
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
*/

function capitals(word: string): number[] {
  return word.split('').reduce((acc: number[], l: string, idx: number) => {
    if (l === l.toUpperCase()) {
      acc.push(idx)
    }
    return acc
  }, []);
}

capitals('CodEWaRs') //, [0,3,4,6] 