The purpose of this repository is to practice web concepts that includes Javascript , react and Nodejs

    EVENT LOOP VISUAL REPRESENTATION : https://www.instagram.com/reel/C3pGiiRAXmN/?igsh=OXNodjNwcHozZ3hh

    CALLBACK HELL :
The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell. The shape of the resulting code structure resembles a pyramid and hence callback hell is also called the “pyramid of the doom”. It makes the code very difficult to understand and maintain. It is most frequently seen while working with Node.js. The code below shows an example of a callback hell.

    ESCAPE FROM CALLBACK HELL :
In a nutshell, the usage of promises and async/await serves as a way to escape the callback hell as mentioned above. Apart from these writing comments and splitting the code into separate components can also be tried out. So, currently most the software engineers prefer using the async/await while building applications.
```javascript
function getArticle(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching data....");
      resolve({ id: id, name: "derik" });
    }, 5000);
  });
}

getArticle("1").then(res=> console.log(res))

async function showImages() {
  try {
    const article = await getArticle(10); // these function returns the promises
    const place = await getPlaces(article.name); 
    const city = await getCity(place)
    console.log(city);
  } catch (err) {
    console.log("Error: ", err.message);
  }
}

showImages();
```

<h3>Pure Function</h3>
A function is said to be pure if:

-Its return value is only determined by its input values
-Its return value is always the same for the same input values

<h3>When to Use the useCallback Hook</h3>
An important thing to mention is that memo doesn't work if the prop being passed to the component is a function. 
What useCallback does is to hold on to the value of the function despite the parent component re-rendering, so the child prop will remain the same as long as the function value remains the same as well.

```Reactjs
import { useState, useCallback } from 'react'
import Child from "./child"

export default function Counter() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => setCount(count+1)
    const handleDecrement = () => setCount(count-1)

    return (
        <div className="App">
            {console.log('parent')}
            <button onClick={() => handleIncrement()}>Increment</button>
            <button onClick={() => handleDecrement()}>Decrement</button>

            <h2>{count}</h2>

             <Child name={ useCallback(() => {console.log('Really Skinny Jack')}, [])  } />
        </div>                    
    )
}
```

To use it, we just need to wrap the useCallback hook around the function we're declaring. In the array present in the hook, we can declare variables that would trigger the change of the function value when the variable changes too (exactly the same way useEffect works).

<h3>Usememo hook</h3>
useMemo is a hook very similar to useCallback, but instead caching a function, useMemo will cache the return value of a function.

In this example, useMemo will cache the number 2.
```javascript
const num = 1
const answer = useMemo(() => num + 1, [num])
```
<h3>When to Memoize</h3>
Memoization in React is a good tool to have in our belts, but it's not something you should use everywhere. These tools are useful for dealing with functions or tasks that require heavy computation.

We have to be aware that in the background all three of these solutions add overhead to our code, too. So if the re-render is caused by tasks that are not computationally heavy, it may be better to solve it in other way or leave it alone.

<h3>forEach vs Map</h3>
`map()` and `forEach()` are both useful array methods in JavaScript that perform similar actions but have different functionalities. `map()` creates a new array based on the values of an existing array, whereas `forEach()` performs an action on each element of an array without creating a new array.

In terms of performance, `forEach()` is generally faster than `map()` for simple iterations, as it does not create a new array. However, this can vary depending on the specific use case and the amount of data being processed. Therefore, it is important to consider the specific requirements of your code when choosing between `map()` and `forEach()`.

<h3>Find() vs Filter()</h3>

The main differences between above examples is:

-filter() returns an array containing the element that satisfies the condition, but find() returns the element itself that satisfies the condition.
-In filter(), whole array is iterated despite the fact that the element being searched for is present at the beginning. But in find(), as soon as the element that satisfies the condition is found, it gets returned.

<h3>Introduction to Generator Functions</h3>
A generator function is a special type of function in JavaScript that allows pausing and resuming its execution during runtime. Unlike regular functions, which run to completion, generator functions can be paused and resumed multiple times, making them particularly useful for dealing with asynchronous operations, handling large datasets, and writing custom iterators.

Generator functions are defined using the function* syntax, and they use the yield keyword to pause the function's execution and produce a value. When a generator function is called, it returns an iterator object, which can be used to control the function's execution.

<h5>The next() Method</h5>
-The next() method is used to resume the execution of a generator function from where it was paused. It returns an object with two properties: value and done.

-The value property contains the value produced by the yield statement.
-The done property is a boolean indicating whether the generator has completed (true) or is still running (false).

<h3>Inheritance and Protyping chaining</h3>
Inheritance and the prototype chain
In programming, inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one. JavaScript implements inheritance by using objects. Each object has an internal link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.

Read more : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain


