// 一、原型链继承
function Person() {
  this.name = "why"
  this.age = 18
}

Person.prototype.running = function() {
  console.log('Person is running')
}
function Student() {

}
const p = new Person()
Student.prototype = p

const n = new Student()
console.log(n)

//  缺点
// 1. 无法像父类传参,且无法显示继承属性
// 2. 修改值为引用类型的值时,所有实例的都会发生改变
// 3. 直接修改对象上的属性, 是给本对象添加了一个新属性