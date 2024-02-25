function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure 
      // this is the lexical scoping of JavaScript : the inner function has access to the variables of the outer function
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
init();
  
//Another example of closure

function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12
  