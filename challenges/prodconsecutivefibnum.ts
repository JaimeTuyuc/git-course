/*
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.

Some Examples of Return:
(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 
Note:
You can see examples for your language in "Sample Tests".
*/

type ResultItem = number | boolean;
type Result = [number, number, boolean];

const productFib = (prod: number): [number, number, boolean] => {
  const initialarr: number[] = [0, 1];
  let nextN: number = 0;
  let result: ResultItem[] = [];

  while (nextN <= prod) {
    nextN = initialarr.slice(-2).reduce((acc, n) => acc + n, 0);
    const prevN: number = initialarr.slice(-1)[0];

    if (prevN * nextN === prod) {
      result.push(prevN, nextN, true);
    } else if (prevN * nextN > prod) {
      result.push(prevN, nextN, false);
    }

    initialarr.push(nextN);
  }

  return result.slice(0, 3) as Result;

  /* !
  Another approach
  let a = 0, b = 1
  
  while (a * b < prod) {
    b += a
    a = b - a
  }
  
  return [a, b, a * b === prod]
  */

  /*
    //! #2
    let prev = 0;
    let curr = 1;
    while (prev * curr < prod) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return [prev, curr, prev * curr === prod];
  */
}

productFib(4895) //, [55, 89, true])
productFib(5895) //, [89, 144, false])
productFib(74049690) //, [6765, 10946, true])
productFib(84049690)//, [10946, 17711, false])
productFib(193864606) //, [10946, 17711, true])
productFib(447577) //, [610, 987, false])
productFib(602070) //, [610, 987, true])











