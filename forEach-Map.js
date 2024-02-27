const numbers = [1, 2, 3, 4, 5];

// Using map()
console.time('map');
const doubledNumbersMap = numbers.map((num) => num * 2);
console.timeEnd('map');

// Using forEach()
console.time('forEach');
const doubledNumbersForEach = [];
numbers.forEach((num)=>{
doubledNumbersForEach.push(num * 2);
});
console.timeEnd('forEach');

console.log(doubledNumbersMap); // Output: [2, 4, 6, 8, 10]
console.log(doubledNumbersForEach); // Output: [2, 4, 6, 8, 