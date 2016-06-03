// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript

//  Defines that JavaScript code should be executed in "strict mode".
// 'use strict';

var Person = function (firstName) {
  this.firstName = firstName;
};

Person.prototype.sayHello = function(arg1, arg2, arg3) {
  console.log("Hello, I'm " + this.firstName + " and the args are " + arg1 + "|" + arg2 + "|" + arg3);
};

var person1 = new Person("Alice");
var person2 = new Person("Bob");

var helloFunction = person1.sayHello;

person1.sayHello("hand");

person2.sayHello("mouth");

helloFunction("eye");

console.log(helloFunction === person1.sayHello);

console.log(helloFunction === Person.prototype.sayHello);

// The call() method calls a function with a given this value and arguments provided individually.
helloFunction.call(person1, "foot", "face", "leg");


// The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).
helloFunction.apply(person2, ["foot", "face", "leg"]);
