//Descending Order

// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

export function descendingOrder(n: number) {
  const array = String(n).split("");
  const newArray = array.sort((a, b) => Number(b) - Number(a));
  return Number(newArray.join(""));
}

console.log(descendingOrder(21445));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));
