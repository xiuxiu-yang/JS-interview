const integerPartition = (n, num) => {
  const arr = new Array(n).fill(0)
  const separate = (n, num) => {
    if (n == 1) {
      arr[arr.length - n] = num
      console.log(arr)
      return
    }
    let start = arr[arr.length - n - 1] ? arr[arr.length - n - 1] + 1 : 1
    for (let i = start; i < num; i++) {
      arr[arr.length - n] = i
      if (num - i > i) {
        separate(n - 1, num - i)
      }
    }
  }
  separate(n, num)
}
integerPartition(4, 20)