const fib = (n, memo) => {
    memo = memo || {}

    if (memo[n]) return memo[n]

    if (n <= 1) return 1
    return memo[n] = fib(n-1, memo) + fib(n-2, memo)
}

// For class pure components, to implement memoization React provides the PureComponent base class.

import React from "react"
import Child from "./child"

class Counter extends React.Component {
    constructor(props) {
      super(props)
      this.state = { count: 0 }
    }

    handleIncrement = () => { this.setState(prevState => {
        return { count: prevState.count - 1 };
      })
    }

    handleDecrement = () => { this.setState(prevState => {
        return { count: prevState.count + 1 };
      })
    }

    render() {
      console.log("Parent render")

      return (
        <div className="App">

          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>

          <h2>{this.state.count}</h2>

          <Child name={"Skinny Jack"} />
        </div>
      )
    }
  }

//export default Counter

import React from "react"

class Child extends React.Component {
    render() {
      console.log("Skinny Jack")
      return (
          <h2>{this.props.name}</h2>
      )
    }
  }

export default Child

// Implementation of memiozation in class components : React.PureComponent

import React from "react"

class Child extends React.PureComponent {
    render() {
      console.log("Skinny Jack")
      return (
          <h2>{this.props.name}</h2>
      )
    }
  }

//export default Child