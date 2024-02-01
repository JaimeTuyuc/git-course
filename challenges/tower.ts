/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]


[
  "      *      ", 
  "     ***     ", 
  "    *****    ", 
  "   *******   ", 
  "  *********  ", 
  " *********** ",
  "*************"
]
*/

const towerBuilder = (nFloors: number): string[] => {
  let data: string[] = []
  let numSpaces: number = nFloors - 1
  for (let i = 1; i <= nFloors; i++) {
    const asteriskCount = 2 * i - 1;
    const floorString = ' '.repeat(numSpaces) + '*'.repeat(asteriskCount) + ' '.repeat(numSpaces);
    data.push(floorString)
    numSpaces -= 1
  }
  return data
}


towerBuilder(1) //, ["*"]);
towerBuilder(2) //, [" * ","***"]);
towerBuilder(3) //, ["  *  ",
//.  " *** ",
//.  "*****"])

