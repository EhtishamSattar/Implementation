/*
    Callback Functions: A JavaScript callback is a function which is to be executed after another
 function has finished execution.

    A more formal definition would be - Any function that is passed as an argument
to another function so that it can be executed in that other function is called as a callback function.


    Benefits of Callback Function:
    
    Callback functions are needed because many JavaScript actions are asynchronous.
    Instead, it executes in the background while the rest of the code runs. A
    callback's purpose is to execute code in response to an event. These events
    can be like mouse clicks; with callback, we can add text at the end of each
    statement like"execute this code every time the user clicks a key on the keyboard."


*/

const button = document.getElementById('button');
function callback() {
    console.log("Hello world from callback function");
}

button.addEventListener('click', callback);

// Reach out astnc-await file for more example of callback functions.