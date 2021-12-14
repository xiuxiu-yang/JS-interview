const arr = [5, 3, 9, 8, 4, 6]

arr.sort((a, b) => {
  console.log(a, b)
  return a - b
})
console.log(arr)