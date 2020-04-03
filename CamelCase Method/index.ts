// CamelCase Method

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java)
// for strings. All words must have their first letter capitalized without spaces.

// camelCase("hello case"); // => "HelloCase"
// camelCase("camel case word"); // => "CamelCaseWord"

// export function camelCase(str: string): string {
//   const array = str.match(/ \w/g)
//   if (!array) return str
//   let newStr: string = str.trim()
//   newStr = newStr.replace(newStr[0], newStr[0].toUpperCase())
//   array.forEach(el => {
//     newStr = newStr.replace(el, el.trim().toUpperCase())
//   })

//   return newStr
// }
export function camelCase(str: string) {
  const array = str.trim().split(" ")
  const t = array.map((el, i) => el[0].toUpperCase() + array[i].slice(1)).join("")
  return t
}

console.log(camelCase("hello case"))
console.log(camelCase("camel case word"))
console.log(camelCase("say hello "))
console.log(camelCase(" camel case word"))
