// Introduction to Generator Functions
//      A generator function is a special type of function in JavaScript
//      that allows pausing and resuming its execution during runtime. Unlike
//      regular functions, which run to completion, generator functions can be
//      paused and resumed multiple times, making them particularly useful for
//      dealing with asynchronous operations, handling large datasets, and writing
//      custom iterators.

function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const iterator = simpleGenerator();
console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next()); // Output: { value: 2, done: false }
console.log(iterator.next()); // Output: { value: 3, done: false }
console.log(iterator.next()); // Output: { value: undefined, done: true }