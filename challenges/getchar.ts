/*
Write a function which takes a number and returns the corresponding ASCII char for that value.

Example:

65 --> 'A'
97 --> 'a'
48 --> '0
*/

function getChar(c: number): string {
  return String.fromCharCode(c)
}

getChar(55)//, '7');
getChar(56)//, '8');
getChar(57)//, '9');
getChar(58)//, ':');
getChar(59)//, ';');
getChar(60)//, '<');
getChar(61)//, '=')