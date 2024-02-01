/*

  Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name: string): string {
  const splited = name.split(' ')
  return `${splited[0].slice(0, 1).toUpperCase()}.${splited[1].slice(0, 1).toUpperCase()}`;
}

abbrevName("Sam Harris") // S.H
abbrevName("R Favuzzi")




