/*
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "2345677 1"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("5630 0065 5734 4694 85", 4) --> "0365 0650 7345 6944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".
*/
function revRot(s: string, sz: number): string {
  if ((sz === 0 || !s || sz > s.length)) return ''

  const chunks:string[] = [];
  for (let i = 0; i < s.length; i += sz) {
    const chunk = s.slice(i, i + sz);
    if (chunk.length === sz) {
      const sumOfCubes = chunk
        .split("")
        .reduce((sum, digit) => sum + Math.pow(parseInt(digit), 3), 0);
      chunks.push( sumOfCubes % 2 === 0 ? chunk.split("").reverse().join("") : rotateLeft(chunk) );
    }
  }

  return chunks.join("");
}

function rotateLeft(str:string) {
  return str.slice(1) + str[0];
}

revRot("1234", 0) //, "");
revRot("", 0) //, "");
revRot("1234", 5) //, "");
revRot("733049910872815764", 5); //, "330479108928157")

