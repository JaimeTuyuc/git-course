/*

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

function persistence(num: number): number {
 // your code here
  let count = 0;

  // Use a loop to continue multiplying until num becomes a single digit
  while (num >= 10) {
    // Convert the number to an array of digits
    const digits = num.toString().split('').map(Number);
    console.log(digits)
    // Multiply the digits
    num = digits.reduce((product, digit) => product * digit, 1);

    // Increment the count
    count++;
  }

  // Return the final count
  return count;
  
  
}

persistence(39) //,3);
persistence(4) //,0);
persistence(25) //,2);
persistence(999) //,4);