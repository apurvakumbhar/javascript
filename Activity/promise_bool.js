let isSuccess = true;

let myPromise = new Promise((resolve, reject) => {
  if (isSuccess) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));