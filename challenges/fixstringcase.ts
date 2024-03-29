/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/
function solve(s: string) {
  const lowercaseMatches = s.match(/[a-z]/g);
  const uppercaseMatches = s.match(/[A-Z]/g);
  
  const lowercaseCount = lowercaseMatches ? lowercaseMatches.length : 0;
  const uppercaseCount = uppercaseMatches ? uppercaseMatches.length : 0;
  
  return lowercaseCount > uppercaseCount ? s.toLowerCase() : s.toUpperCase();


  /*
  //! using another aproach with regex
  const numUpper: number = (s.match(/[A-Z]/g) || []).length;
  const numLower: number = (s.match(/[a-z]/g) || []).length;
  
  return numUpper > numLower ? s.toUpperCase() : s.toLowerCase();
  */
}

solve("code") //, "code"));
solve("CODe") //, "CODE"));
solve("COde") //, "code"));
solve("Code") //, "code"))



















