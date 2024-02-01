/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
*/

function get_age(age: string): number {
  return parseInt(age.split('').join(''));
}

get_age("2 years old") //, 2);    
get_age("4 years old") //, 4);
get_age("5 years old") //, 5);    
get_age("7 years old") //, 7)a