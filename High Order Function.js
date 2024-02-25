// Functions that operate on other functions, either by taking them
// as arguments or by returning them.




//Example 1
const numbers=[5,19,33,32,10,4];

const oddArr=numbers.filter((number)=>number%2!=0);

console.log(oddArr);

//Example 2

const numbers2 = [1, 2, 3, 4, 5];

function isOdd(array, oddArr = []) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArr.push(array[i]);
    }
  }
  return oddArr;
}

const oddArray = isOdd(numbers2);
console.log(oddArray);