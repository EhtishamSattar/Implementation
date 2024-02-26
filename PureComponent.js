// a React component is considered pure if it renders the same output 
// for the same state and props.

// A functional pure component could look like this:

// Pure component
export default function PureComponent({name, lastName}) {
    return (
      <div>My name is {name} {lastName}</div>
    )
}

// Impure component
export default function ImpurePureComponent({name, lastName}) {
    return (
      <div>My "impure" name is {name + Math.random()} {lastName + Math.random()}</div>
    )
}

// Pure Class component

// class PureComponent2 extends React.Component {
//     render() {
//       return (
//         <div>My "name is {this.props.name} {this.props.lastName}</div>
//       )
//     }
//   }

// export default PureComponent2


// Impure Class component

// class ImpurePureComponent2 extends React.Component {
//     render() {
//       return (
//         <div>My "impure" name is {this.props.name + Math.random()} {this.props.lastName + Math.random()}</div>
//       )
//     }
//   }

// export default ImpurePureComponent2