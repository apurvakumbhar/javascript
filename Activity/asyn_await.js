//syn
function withdraw() {
  console.log("Processing...");
}

withdraw();
console.log("Take cash");
//asyn
function orderFood() {
  setTimeout(() => {
    console.log("Food delivered 🍔");
  }, 3000);
}

orderFood();
console.log("Watching YouTube...");