// Remove First and Last Character

function removeChar(str: string): string {
  // You got this!
  return str.slice(1).slice(0, -1)
}


removeChar('eloquent') //, 'loquen');
removeChar('country') //, 'ountr');
removeChar('person') //, 'erso');
removeChar('place') //, 'lac')