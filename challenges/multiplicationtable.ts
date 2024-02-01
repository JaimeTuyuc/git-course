function multiTable(number: number): string {

  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => `${item} * ${number} = ${item * number}`).join('\n')
}

multiTable(5)