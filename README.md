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


