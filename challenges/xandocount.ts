/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function xo(str: string): boolean {
  const lowercase = str.toLowerCase()
  const bothmatches = lowercase.match(/o|x/gi)
  if (!bothmatches || bothmatches.length === 0) return true
  const ocount = lowercase.match(/o/gi)
  const xcount = lowercase.match(/x/gi)
  if (!ocount || !xcount) return false
  return ocount.length === xcount.length
}

xo('xo') //,true);
xo("xxOo") //,true);
xo("xxxm") //,false);
xo("Oo") //,false);
xo("ooom") //,false