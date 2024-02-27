const x = [1, 2, 3, 4, 5];

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

const res = emp.find(el => el.empID === 102);

console.log("res is: ", res); // res is: {name: 'Sham', empID: 102}