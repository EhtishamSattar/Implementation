// underfined : Variable declared but not assigned values
// ReferenceError: Variable is not defined

// Differnce between Let , Var and Const

/*  
    Let : Let is blocked scope , we can only get the value of the variable if it is declared and assigned a 
    value first before we can use it. It is not hoisted.

    Var : Var is function scope and Global scope , if we want to assess the value before declaration it will give us the value 
    as Undefined. It is hoisted. Because the variable is hoisted to the top of the function or global scope.
    .If a variable value is accessed in a function later the variable is defined, it will return undefined.too because the variable is hoisted to the top of the function scope.

    Const : Const is blocked scope , we can only get the value of the variable if it is declared and assigned a value and it is immutable. It is not hoisted.
*/


// Hoisting

console.log(a);  // undefined
var a = 10;

//console.log(b); // ReferenceError: b is not defined
let b = 10;

//console.log(c); // ReferenceError: c is not defined
const c = 10;


function hoist() {
    console.log(message);  // undefined bcz message variable is hoisted on the top of function scope
    var message = 'Hoisting is all the rage!'
}

hoist();

//This is how the interpreter views the above code:

function hoistInterpreter() {
  var message;
  console.log(message);  // Undefined
  message='Hoisting is all the rage!'
}

hoistInterpreter(); // Ouput: undefined