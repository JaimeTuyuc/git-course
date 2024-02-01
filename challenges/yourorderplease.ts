/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/
function order(words: string): string {
  const splitedWords = words.split(' ');
  const numberRegex = words.match(/\d+/g);
  const sortedNumbers = numberRegex ? numberRegex.sort() : [];
  let elements: Record<string, string> = {};
  for (let i = 0; i < splitedWords.length; i++) {
    const number = splitedWords[i].match(/\d+/g);
    if (number) {
      elements[number[0]] = splitedWords[i];
    }
  }
  return Object.values(elements).join(' ');

  //! Using map/sort
  /*
  return words
    .split(' ')
    .sort((a, b) => {
      const A = Number(a.match(/\d+/));
      const B = Number(b.match(/\d+/));
      return A - B;
    })
    .join(' ');
  */
}

order("is2 Thi1s T4est 3a") //, "Thi1s is2 3a T4est");
order("4of Fo1r pe6ople g3ood th5e the2") //, "Fo1r the2 g3ood 4of th5e pe6ople");
order("") // , "")








