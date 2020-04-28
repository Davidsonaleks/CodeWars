//Roman Numerals Decoder

// Create a function that takes a Roman numeral as its argument and
// returns its value as a numeric decimal integer.
// You don't need to validate the form of the Roman numeral.

const fromRomanTONumber: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

export function solution(roman: string): number {
  const r = roman
    .split("")
    .map((roman) => fromRomanTONumber[roman])
    .reduce((acc, curr, i, arr) => {
      if (arr[i - 1] < curr) {
        return curr - acc
      } else {
        return acc + curr
      }
    })
  console.log(r)
  return r
}

solution("XXI") // should return 21
solution("I") // 1
solution("IIX") // 4
solution("MMVIII") // 2008
solution("MDCLXVI") // 1666)
