// this is an asynchronous function and returns a promise
async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const users = await resp.json();
    const titles = users.map(({ title }) => title);
    console.log(titles);
}


//We can make this an asynchronous callback by adding it to an event, like a button click.
//We are using asynchrnous function as our callback function

const button2 = document.getElementById('fetchUsers');
button2.addEventListener('click', fetchUsers);