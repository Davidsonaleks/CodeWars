// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

export function findUniq(arr: number[]): number {
  let num = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      console.log("test")
      num = arr[i]
      return arr.find(el => el !== num)!
    }
  }
  return arr.find(el => el !== num)!
}

// export function findUniq(arr: number[]): number {
//     arr.sort()
//     return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0]
//   }

console.log(findUniq([1, 1, 1, 2, 1, 1]))
// console.log(findUniq([0, 0, 0.55, 0, 0]))
