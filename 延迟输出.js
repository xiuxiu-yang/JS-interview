
const arr = [1, 5, 6, 4, 8]

const fn = (n) => {
  if (n < arr.length) {
    if (arr[n] % 2) {
      console.log(arr[n])
      setTimeout(() => {
        fn(n + 1)
      }, 1000)
    } else {
      console.log(arr[n])
      setTimeout(() => {
        fn(n + 1)
      }, 2000)
    }
  }
}
fn(0)
