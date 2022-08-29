function enumerable (isEnumerable) {
  return function(target, key, descriptor) {
    descriptor.enumerable = isEnumerable
  }
}

class Dog {
  @enumerable(false)
  eat () { }
}