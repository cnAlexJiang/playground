import { deprecate } from 'core-decorators'

class Dog {
  @deprecate
  peeInRoom () {}

  @deprecate('I am a good dog.')
  peeInBed () {}
}

let dog = new Dog()

dog.peeInRoom()
// DEPRECATION Dog#peeInRoom: This function will be removed in future versions.

dog.peeInBed()
// DEPRECATION Dog#peeInBed: I am a good dog.