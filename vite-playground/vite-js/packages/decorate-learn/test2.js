function doge (isDoge) {
  return function(target) {
    target.isDoge = isDoge
  }
}

@doge(true)
class Dog {}

console.log(Dog.isDoge)
// true

@doge(false)
class Human {}
console.log(Human.isDoge)
// false

