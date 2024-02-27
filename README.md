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



