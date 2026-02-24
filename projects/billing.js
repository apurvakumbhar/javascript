let total = 0;

const items = {
    Rice: 60,
    Sugar: 50,
    Milk: 28,
    Soap: 30,
    Maggi: 14,
    Chocolate: 30
};

function addItem(name) {

    total += items[name];

    console.log(name + " added ₹" + items[name]);
    console.log("Current Total = ₹" + total);
}

function finishBilling() {

    console.log("FINAL BILL");
    console.log("Total Amount = ₹" + total);
    console.log("Thank You!");

    document.getElementById("result").innerHTML =
        "Total Amount = ₹" + total + "<br>Thank You!";
}