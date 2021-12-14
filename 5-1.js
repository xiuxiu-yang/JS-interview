let num = [2, 2, 6, 5, 7]
let arr = new Array(num.length).fill(false)
let sum = 7
let res = []
const dfs = (sum) => {
  if (sum == 0) {
    return true
  }
  if (sum < 0) {
    return false
  }
  for(let i = 0; i < num.length; i++) {
    if (!arr[i] && sum >= num[i]) {
      arr[i] = true
      res.push(num[i])
      if(dfs(sum - num[i])) {
        return true
      }
      res.pop()
      arr[i] = false
    }
  }
}
dfs(sum)
if (res.length) {
  console.log(res)
} else {
  console.log('No Solution')
}
