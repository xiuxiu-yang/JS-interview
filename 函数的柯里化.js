const sum = (a, b, c, d) => {
  return a + b + c + d
}

const currying = (fn) => {
  const curry = function (...arg) {
    if (fn.length <= arg.length) {
      return fn.apply(this, arg)
    } else {
      const recurse = function (...args) {
        return curry.apply(fn ,arg.concat(args))
      }
      return recurse
    }
  }
  return curry
}

const add = currying(sum)
console.log(add(10,20,30)(40))