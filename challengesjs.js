function rot13(str) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return str
    .split('')
    .reduce((acc, l) => {
      if (/^[a-zA-Z ]+$/.test(l)) {
        return acc.concat(letters.indexOf(l))
      } else {
        return acc.concat(`${l}`)
      }
    }, [])
    .reduce((acc1, n) => {
      return acc1.concat(n < 0 ? '_' : typeof n === 'string' ? n : n + 1)
    }, [])
    .reduce((str, l) => {
      const realIdx = l + 13
      if (typeof realIdx === 'number') {
        if (realIdx > 26) {
          str += letters[realIdx - 27]
        } else {
          str += letters[realIdx - 1]
        }
      } else if (l === '_') {
        str += ' '
      } else {
        str += l
      }
      return str
    }, '')
}

rot13('SERR PBQR PNZC')
rot13('SERR CVMMN!')
rot13('SERR YBIR?')
rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')
