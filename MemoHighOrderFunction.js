import { useState } from 'react'
import Child from "./child"

// export default function Counter() {

//     const [count, setCount] = useState(0)

//     const handleIncrement = () => setCount(count+1)
//     const handleDecrement = () => setCount(count-1)

//     return (
//         <div className="App">
//             {console.log('parent')}
//             <button onClick={() => handleIncrement()}>Increment</button>
//             <button onClick={() => handleDecrement()}>Decrement</button>

//             <h2>{count}</h2>

//             <Child name={"Skinny Jack"} />
//         </div>                    
//     )
// }

// // import React from 'react'

// // export default function Child({name}) {
// // console.log("Skinny Jack")
// //   return (
// //     <div>{name}</div>
// //   )
// // }


// For Memiozation in functional Components : so that they dont get rendered unnecessarily 
// if the props or stat remain the same

export default React.memo(function Child2({name}) {
console.log("Skinny Jack")
  return (
    <div>{name}</div>
  )
})