let globalActive = null
const globalDepend = new WeakMap()
let watchFn = (fn) => {
  globalActive = fn
  fn()
  globalActive = null
}

class Depend {
  constructor() {
    this.dps = new Set()
  }
  addDepend() {
    if (globalActive) {
      this.dps.add(globalActive)
    }
  }

  notify() {
    this.dps.forEach(fn => {
      fn()
    })
  }
}

const getDepend = (target, key) => {
  let depend = globalDepend.get(target)
  if (!depend) {
    depend = new Map()
    globalDepend.set(target, depend)
  }

  let dep = depend.get(key)
  if (!dep) {
    dep = new Depend()
    depend.set(key, dep)
  }

  return dep
} 
const reactive = (obj) => {
  return new Proxy(obj, {
    get(target, key, receiver) {
      const dep = getDepend(target, key)
      dep.addDepend()
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
      Reflect.set(target, key, value, receiver)
      const dep = getDepend(target, key)
      dep.notify()
    }
  })
}
const reactive2 = (obj) => {
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
      get() {
        const dep = getDepend(obj, key)
        dep.addDepend()
        return value
      },
      set(newValue) {
        value = newValue
        const dep = getDepend(obj, key)
        dep.notify()
      }
    })
  })

  return obj
}
const obj = reactive2({
  name: 'why',
  age: 18
})

watchFn(() => {
  console.log(obj.name, "111111111")
})

watchFn(() => {
  console.log(obj.age)
})
obj.age = 16
obj.name = "yct"