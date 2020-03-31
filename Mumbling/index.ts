//Mumbling

// This time no story, no theory. The examples below show you how to write function accum:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

//First variant
// export function accum(str: string): string {
//   let arr: string[] = []
//   for (let i = 0; i < str.length; i++) {
//     let arr2: string[] = []
//     for (let k = 0; k <= i; k++) {
//       !k ? arr2.push(str[i].toUpperCase()) : arr2.push(str[i].toLowerCase())
//     }
//     arr.push(arr2.join(""))
//   }
//   return arr.join("-")
// }

export function accum(str: string): string {
  return str
    .split("")
    .map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
    .join("-")
}

console.log(accum("ZpglnRxqenU"))
