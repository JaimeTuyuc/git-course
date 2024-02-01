function fib(n:number):number {

  let arr = [0, 1]
  for (let i = 0; i < n; i++) {
    const nextN = arr.slice(-2).reduce((acc, n) => acc + n, 0)
    arr.push(nextN)
  }
  console.log(arr.slice(0, -2))
  return arr.slice(0, -2).reduce((c, n) => c + n, 0)
}

fib(10)
