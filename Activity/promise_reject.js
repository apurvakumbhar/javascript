let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error occurred");
  }, 3000);
});

p2.catch(err => console.log(err));