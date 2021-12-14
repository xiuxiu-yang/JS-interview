Function.prototype.myCall = function(thisArg, ...argArray) {
  const fn = this
  thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window
  thisArg.fn = fn
  const result = thisArg.fn(...argArray)
  delete thisArg.fn
  return result
}

Function.prototype.myApply = function(thisArg, argArray = []) {
  const fn = this
  thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window
  thisArg.fn = fn
  const result = thisArg.fn(...argArray)
  delete thisArg.fn
  return result
}

Function.prototype.myBind = function(thisArg, ...argArray) {
  const fn = this
  thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window
  thisArg.fn = fn
  return (...arg) => {
    const result = thisArg.fn(...argArray, ...arg)
    delete thisArg.fn
    return result
  }
}




function add(num1, num2) {
  console.log(this)
  console.log(num1 + num2)
}
const add2 = add.myBind({name:'123'},10)
add2(20)