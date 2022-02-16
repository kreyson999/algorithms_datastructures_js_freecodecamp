function sumArray(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let remainingSum = sumArray(arr.slice(1))
  return arr[0] + Number(remainingSum)
}

console.log(sumArray([1,4,7,2,5]))