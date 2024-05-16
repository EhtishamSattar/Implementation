const x = [1, 2, 3, 4, 5];

// The filter() method returns a new array containing all elements of the original array that satisfy the provided testing function.
// It iterates through the entire array and collects all elements that meet the condition.

const y = x.filter(el => el%2 === 0);

console.log("y is: ", y); // y is: [2, 4]

const emp = [
    {
        name: "Rameen",
        empID: 101
    },
    {
        name: "Sham",
        empID: 102
    },
    {
        name: "Mohsin",
        empID: 103
    }
];

// find() returns the first element that met the condition
// it stops iterating if the element is found

const res = emp.find(el => el.empID === 102);

console.log("res is: ", res); // res is: {name: 'Sham', empID: 102}
