const obj = {
  _value: 11
}

Object.defineProperty(obj, 'value', {
  get() {
    return this._value
  },
  set(newV) {
    this._value = newV
  }
})
obj.value = 22
console.log(obj)
console.log(obj.value)