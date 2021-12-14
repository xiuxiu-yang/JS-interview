const str = "x1x"
const n = 3
const average = (str, n) => {
  const dp = []
  const remainderArr = []
  for (let i = 0; i <= str.length; i++) {
    dp[i] = []
    for (let j = 0; j < n; j++) {
      dp[i][j] = 0
    }
  }
  if (str[0] == 'x') {
    for (let i = 1; i <= 9; i++) {
      let remainder = i % n
      dp[1][remainder]++
    }
  } else { 
    let remainder = parseInt(str[0]) % n
    dp[1][remainder]++
  }
  for (let i = 2; i <= str.length; i++) {
    for (let j = 0; j < n; j++) {
      if (str[i - 1] === 'x') {
        for (let k = 0; k <= 9; k++) {
            let remainder = (k + j * 10) % n
            dp[i][remainder] += dp[i - 1][j]
        }
      } else {
          let remainder = (parseInt(str[i - 1]) + j * 10) % n
          dp[i][remainder] += dp[i - 1][j]
      }
    }
  }

  const _recurse = (remainder, len) => {
    if (len === str.length && !remainder) {
      console.log(str.join(''))
    } else if(len < str.length){
      if(str[len] === 'x') {
        for(let i = 0; i <= 9; i++) {
          let newremainder = (remainder * 10 + i) % n
          str[len] = i
          _recurse(newremainder, len + 1)
          str[len] = 'x'
        }
      } else {
        let newremainder = (remainder * 10 + parseInt(str[len])) % n
        _recurse(newremainder, len + 1)
      }
    }
  }
  _recurse(0,0)
  console.log(dp)
  console.log(dp[str.length][0])
}
average(str.split(''), n)
