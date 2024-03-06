// What is Event Bubbling?
// Event Bubbling is a concept in the DOM (Document Object Model).
// It happens when an element receives an event, and that event bubbles
// up (or you can say is transmitted or propagated) to its parent and
// ancestor elements in the DOM tree until it gets to the root element.

// When you click the button, you can think of it like you're also clicking the span
//  (the blue background). This is because the button is a child of the span.

// It's also the same thing with the div and the body. When you click the button,
//  it's just like you're also clicking the span, div, and body because they are the
//   button's ancestors. This is the idea of event bubbling.

// An event doesn't stop at the direct element that receives it. The event
//  bubbles up to its ancestors, until it gets to the root element.

// So if the button receives a click event, for example, the span, div, and
//  body (up until html, the root element) respectively receive that event:



//   UNCOMMENT AND RUN IT FIRST


// const body = document.getElementsByTagName("body")[0]
// const div = document.getElementById("bubblingId")
// const span = document.getElementsByTagName("span")[0]
// const buttonBubbling = document.getElementById("bubbling")

// body.addEventListener('click', () => {
//     console.log("body was clicked")
// })

// div.addEventListener('click', () => {
//     console.log("div was clicked")
// })

// span.addEventListener('click', () => {
//     console.log("span was clicked")
// })

// buttonBubbling.addEventListener('click', () => {
//     console.log("button was clicked")
// })


const body2 = document.getElementsByTagName("body")[0]
const div2 = document.getElementById("bubblingId")
const span2 = document.getElementsByTagName("span")[0]
const buttonBubbling2 = document.getElementById("bubbling")
body2.addEventListener('click', () => {
    console.log("body was clicked")
})

div2.addEventListener('click', () => {
    console.log("div was clicked")
})

span2.addEventListener('click', (event) => {
    //event.stopPropagation()
    console.log("span was clicked")
})

buttonBubbling2.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log("button was clicked")
})