console.log("\nPrototype In Javascript\n")

// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// adding property to constructor function
Person.prototype.gender = 'male';

// adding a method to the constructor function
Person.prototype.greet = function() {
    console.log('hello' + ' ' +  this.name);
}

person1.greet(); // hello John
person2.greet(); // hello John

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender);

// changing the property value of prototype
Person.prototype.gender='Female'

console.log(person2.gender);

// Person.prototype.gender = 'male';

// Prototype Chaining

// If an object tries to access the same property that is in the constructor function and the prototype object,
//  the object takes the property from the constructor function. For example,

console.log("\nPrototype Chaining\n")
function Student() {
    this.name = 'John'
}

// adding property 
Student.prototype.name = 'Peter';
Student.prototype.age = 23

const student = new Student();

console.log(student.name); // John
console.log(student.age); // 23