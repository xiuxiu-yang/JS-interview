
let str = '12+3*(2-13)'

function calc(str) {
  let num = 0
  let pre_sign = '+'
  const num_stack = []
  str += '+'
  for (let i = 0; i < str.length; i++) {
    const chars = str[i]
    if (chars >= '0') {
      num = num * 10 + parseInt(chars)
    } else if (chars === "(") {
      let k = 0
      let j
      for (j = i + 1; j < str.length; j++) {
        const el = str[j]
        if (el === ')') {
          if (k === 0) {
            break
          } else {
            k--
          }
        } else if (el === "(") {
          k++
        }
      }
      num = calc(str.slice(i + 1, j))
      str = str.slice(0, i) + str.slice(j)
    } else {
      if (pre_sign === '+') {
        num_stack.push(num)
      } else if (pre_sign === '-') {
        num_stack.push(-num)
      } else if (pre_sign === '*') {
        num_stack.push(num * num_stack.pop())
      } else if (pre_sign === '/') {
        num_stack.push(num_stack.pop() / num)
      }
      pre_sign = chars
      num = 0
    }
  }
  num_stack.push(num)
  res = num_stack.reduce((pre, cur) => {
    return pre + cur
  }, 0)
  return res
}
console.log(calc(str))
