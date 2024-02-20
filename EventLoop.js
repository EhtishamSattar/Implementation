/*
    The event loop in JavaScript allows it to behave asynchronously 
    and carry out non-blocking I/O operations even though it’s a 
    single-threaded language. The event loop is responsible for executing
    code, collecting and processing events, and carrying out queued sub-tasks.
 */


function foo() {
    console.log('Hello'); // 1: Logs 'Hello' immediately
    setTimeout(bar, 0); // 3: Starts a 0 second timer
    baz(); // 2: Calls the 'baz' function immediately
}

function bar() {
    console.log('World'); // 5: Logs 'World' after 'baz' finishes, despite the 0 second timer
}

function baz() {
    console.log('Goodbye'); // 4: Logs 'Goodbye' before 'bar' because 'bar' was offloaded to the browser
}

foo(); // Starts the 'foo' function


//Example 2:

console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 2000);

console.log('End');


//Descriotion of the code above:

/*
    Despite setTimeout being written in the code before console.log('End'),
    "End" is logged before "Timeout". This is because setTimeout is a Web API provided
    by the browser (not JavaScript itself). When the setTimeout function runs,
    the browser initiates a timer. Once this timer finishes, the callback function
    is put into a Task Queue. The JavaScript runtime checks this Task Queue and pushes
    the callback function into the call stack only when the call stack is empty.
*/
