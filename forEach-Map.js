const numbers = [1, 2, 3, 4, 5];

// Using map()

/*
The map() method iterates over each element of the array and applies a provided function to each element.
It returns a new array containing the results of applying the provided function to each element in the original array.
The original array remains unchanged.

Map vs Filter

Map: if we use just condtional but not perform any operation on the element , it will return the booleans in place of the elements that satidfy the condition
const num=[1,2,3,4,5,6];
const num2=num.map(n1=>n1===2);
console.log(num2); [ false, true, false, false, false, false ]

map() is used to transform each element of the array and produce a new array
with the transformed values, while filter() is used to select elements from the
array that satisfy a certain condition and produce a new array containing only those elements.
Additionally, map() preserves the length of the array, while filter() may result in a
shorter array if some elements are filtered out.

*/
  
console.time('map');
const doubledNumbersMap = numbers.map((num) => num * 2);
console.timeEnd('map');

// Using forEach()

/*

The forEach() method iterates over each element of the array and executes a provided function for each element.
It does not return anything (returns undefined).
It is typically used when you want to perform some action for each element in the array but don't need to produce
a new array with the results.


*/
console.time('forEach');
const doubledNumbersForEach = [];
numbers.forEach((num)=>{
doubledNumbersForEach.push(num * 2);
});
console.timeEnd('forEach');

console.log(doubledNumbersMap); // Output: [2, 4, 6, 8, 10]
console.log(doubledNumbersForEach); // Output: [2, 4, 6, 8, 
