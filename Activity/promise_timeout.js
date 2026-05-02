let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done after 3 sec");
  }, 3000);
});

p.then(data => console.log(data));