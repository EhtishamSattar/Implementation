function getArticle(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Fetching data....");
        resolve({ id: id, name: "derik" });
      }, 5000);
    });
  }
  
  getArticle("1").then(res=> console.log(res)).catch(console.log((err)=> console.log(err)));
  