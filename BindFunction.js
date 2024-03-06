// Function Borrowing
// With the bind() method, an object can borrow a method from another object.

// Example 1
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
console.log(fullName());

// Exapmle 2

// Preserving this

// Sometimes the bind() method has to be used to prevent losing this.

const person2 = {
    firstName: "Muhammad",
    lastName: "Ehtisham",
    display: function () {
        let x = document.getElementById("demo");
        x.innerHTML = this.firstName + " " + this.lastName;
    }
}

person2.display();

setTimeout(person2.display, 3000);

let display = person2.display.bind(person2);
setTimeout(display, 3000);

