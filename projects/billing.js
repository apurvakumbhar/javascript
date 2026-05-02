let totalAmount = 0;
let cart = {};

const welcomePage = document.getElementById("welcomePage");
const billingPage = document.getElementById("billingPage");
document.getElementById("startBtn").addEventListener("click", () => {
    welcomePage.classList.remove("active");
    billingPage.classList.add("active");
});

const loadBtn = document.getElementById("loadBtn");
const productsDiv = document.getElementById("products");
const errorDiv = document.getElementById("error");
const billBody = document.getElementById("billBody");
const finalTotal = document.getElementById("finalTotal");
const resultDiv = document.getElementById("result");

function showError(message, isError) {
    errorDiv.style.color = isError ? "red" : "green";
    errorDiv.innerHTML = message;
}

loadBtn.addEventListener("click", async () => {

    showError("Loading products...", false);

    try {
        const response = await fetch("https://dummyjson.com/products/category/beauty");

        if (!response.ok) {
            throw new Error("Server Error");
        }

        const data = await response.json();
        showError("", false);
        displayProducts(data.products.slice(0, 6));

    } catch (error) {
        showError("Failed to load products. Check internet.", true);
    }
});

function displayProducts(products) {

    productsDiv.innerHTML = "";

    products.forEach(product => {

        const price = Math.round(product.price * 85);

        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <h4>${product.title}</h4>
            <p>₹ ${price}</p>
            <div class="qty-display" id="qty-${product.id}">Qty: 0</div>
            <button>Add Item</button>
        `;

        card.querySelector("button").addEventListener("click", () => {
            addToCart(product.id, product.title, price);
        });

        productsDiv.appendChild(card);
    });
}

function addToCart(id, name, price) {

    if (!cart[id]) {
        cart[id] = { name, price, qty: 0 };
    }

    cart[id].qty++;
    totalAmount += price;

    document.getElementById(`qty-${id}`).innerHTML = "Qty: " + cart[id].qty;

    updateInvoice();
}

function updateInvoice() {

    billBody.innerHTML = "";

    Object.values(cart).forEach(item => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td>₹${item.price}</td>
            <td>₹${item.qty * item.price}</td>
        `;

        billBody.appendChild(row);
    });

    finalTotal.innerHTML = "Total: ₹" + totalAmount;
}

document.getElementById("generateBtn").addEventListener("click", () => {

    console.log("FINAL BILL");
    console.log("Total Amount: ₹" + totalAmount);

    resultDiv.innerHTML =
        "Payment Successful<br><br>Total Paid: ₹" +
        totalAmount +
        "<br>✨ Thank You for Shopping!";
});

document.getElementById("resetBtn").addEventListener("click", () => {

    cart = {};
    totalAmount = 0;
    billBody.innerHTML = "";
    finalTotal.innerHTML = "Total: ₹0";
    resultDiv.innerHTML = "";
    document.querySelectorAll(".qty-display").forEach(qty => {
        qty.innerHTML = "Qty: 0";
    });

    console.log("Billing Reset Successfully");

});