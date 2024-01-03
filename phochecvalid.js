function removeExtraSpaces(str) {
  return str.replace(/\s+/g, '')
}

function getLastFourAndCheck(re, str) {
  const newString = str.slice(0, -4)
  const lastFourDigits = str.slice(-4)
  return {
    newString,
    isValid: re.test(lastFourDigits),
  }
}

function getLastCharacter(str) {
  return str.charAt(str.length - 1)
}

function getThreeNumbers(re, str) {
  const lastChar = getLastCharacter(str)
  const minusLastChar = str.slice(0, -1)
  const newString = minusLastChar.slice(0, -3)
  const lastThreeChar = minusLastChar.slice(-3)
  return {
    n3String: newString,
    is3Valid: re.test(lastThreeChar),
  }
}

function getFinalPartData(re, str) {
  const lastChar = getLastCharacter(str)
  const minusLastChar = str.slice(0, -1)
  const newString = minusLastChar.slice(0, -3)
  const lastThreeChar = minusLastChar.slice(-3)
  return {
    nFString: newString,
    isFValid: re.test(lastThreeChar),
  }
}

function getValidityParenthesis(re, str) {
  const removeLastChar = str.slice(0, -1)
  const lastThreeCharToCheck = removeLastChar.slice(-3)
  const tempFinalString = removeLastChar.slice(0, -3)
  const finalPString = tempFinalString.slice(-1)
  const finalData = tempFinalString.slice(0, -1)
  if (finalPString !== '(') {
    return {
      isValidFinal: false,
      isValidString: 'invalid',
    }
  } else {
    return {
      isValidFinal: re.test(lastThreeCharToCheck),
      isValidString: finalData || 'valid',
    }
  }
}

function getSecondLastThree(re, str) {
  const lastThree = str.slice(-3)
  const newLS = str.slice(0, -3)
  return {
    fV: re.test(lastThree),
    fS: newLS,
  }
}

function getSecondLastThree2(re, str) {
  const lastThree = str.slice(-3)
  const newLS = str.slice(0, -3)
  return {
    fV2: re.test(lastThree),
    fS2: newLS,
  }
}

function telephoneCheck(str) {
  const numberCheck = /^[0-9]+$/

  if (numberCheck.test(str) && str.length === 10) {
    return true
  } else if (str.length < 10) {
    return false
  } else {
    const noSpacesString = removeExtraSpaces(str)
    const { newString, isValid } = getLastFourAndCheck(
      numberCheck,
      noSpacesString
    )

    if (isValid) {
      const lastChar = getLastCharacter(newString)
      if (lastChar === '-') {
        const { n3String, is3Valid } = getThreeNumbers(numberCheck, newString)
        if (is3Valid) {
          const lastChar = getLastCharacter(n3String)
          if (lastChar === '-') {
            const { nFString, isFValid } = getFinalPartData(
              numberCheck,
              n3String
            )
            if (isFValid && nFString.length === 0) return true
            return nFString.length === 1 && nFString === '1'
          } else if (lastChar === ')') {
            const { isValidFinal, isValidString } = getValidityParenthesis(
              numberCheck,
              n3String
            )
            if (!isValidFinal) return false
            if (
              isValidString === 'valid' ||
              (isValidString.length === 1 && isValidString === '1')
            )
              return true
            return false
          } else {
            return false
          }
        } else {
          return false
        }
      } else if (typeof parseInt(lastChar) === 'number') {
        const { fV, fS } = getSecondLastThree(numberCheck, newString)
        if (fV) {
          const lastChar = getLastCharacter(fS)
          if (lastChar === ')') {
            const { isValidFinal, isValidString } = getValidityParenthesis(
              numberCheck,
              fS
            )
            return (
              isValidFinal &&
              isValidString.length === 1 &&
              isValidString === '1'
            )
          } else {
            const { fV2, fS2 } = getSecondLastThree2(numberCheck, fS)
            return fS2.length === 1 && fS2 === '1'
          }
        }
      }
    } else {
      return false
    }
  }
}

telephoneCheck('2 757 622-7382') //false
telephoneCheck('5555555') //false
telephoneCheck('275 7 622 7381') // false
telephoneCheck('(375)7 622 7384') // false
telephoneCheck('123**&!!asdf#') //false
telephoneCheck('11 555-555-5555') //false
telephoneCheck('(555)5(55?)-5553') // false
telephoneCheck('2(757)6227382') // false
telephoneCheck('1 555)555-5555') // false
telephoneCheck('555-5555') // false
telephoneCheck('55 55-55-555-5') // false
telephoneCheck('10 (757) 622-7382') // false
telephoneCheck('1 456 789 4444') // true
telephoneCheck('1(555)555-5552') // true
telephoneCheck('5555555555') // true
telephoneCheck('1 555-555-5551') // true
telephoneCheck('(555)555-5555') // true
telephoneCheck('1 (333) 222-5555') // true
telephoneCheck('999-444-5555') // true;
telephoneCheck('5555555555') // true
telephoneCheck('555-555-5555') // true
