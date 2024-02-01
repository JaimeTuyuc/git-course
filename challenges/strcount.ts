/*
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
*/
function strCount(str: string, letter: string): number {
  const regex = new RegExp(letter, 'ig');
  const matches = str.match(regex);
  return matches && matches.length ? matches.length : 0;
}

strCount('Hello', 'o'); // 1
strCount('Hello', 'l'); // 2
strCount('', 'z'); // 0







