// SEARCH
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function searchPlant() {
  const input = document.getElementById("search").value.toLowerCase();

  const plant = plants.find(p =>
    p.name.toLowerCase().includes(input)
  );

  if (!plant) {
    alert("Plant not found");
    return;
  }

  localStorage.setItem("plant", JSON.stringify(plant));
 window.location.href = "/result";
}

// LOAD RESULT PAGE
if (window.location.pathname.includes("result.html")) {
  const plant = JSON.parse(localStorage.getItem("plant"));
  displayPlant(plant);
}

function displayPlant(plant) {

  let steps = plant.steps.map(s => `<li>${s}</li>`).join("");

  let env = plant.environment.map(e =>
    `<label><input type="checkbox" class="env"> ${e}</label><br>`
  ).join("");

  document.getElementById("result").innerHTML = `
    <h1>${plant.name}</h1>

    <img src="${plant.image}">

    <h3>Steps</h3>
    <ul>${steps}</ul>

    <p><b>Water:</b> ${plant.water}</p>

    <h3>Environment</h3>
    ${env}

    <div id="buy"></div>
  `;
}

function checkGrow(price, answer) {
  const plant = JSON.parse(localStorage.getItem("plant"));
  const checks = document.querySelectorAll(".env");
  let ok = true;

  checks.forEach(c => {
    if (!c.checked) ok = false;
  });

  if (answer && ok) {
    document.getElementById("buy").innerHTML =
  `<button onclick="addToCart('${plant.name}', ${price})">Buy</button>
   <button onclick="goBack()">Add More</button>
   <button onclick="goToBill()">Generate Bill</button>`;
  } else {
    document.getElementById("buy").innerHTML =
      `<h3>❌ Requirements not satisfied</h3>`
  }
}

function buy(price) {
  localStorage.setItem("price", price);
  window.location.href = "buy.html";
}

// BUY PAGE
if (window.location.pathname.includes("buy.html")) {
  const price = localStorage.getItem("price");

  const quotes = [
    "Plants give us life 🌿",
    "Grow plants, grow happiness 🌱",
    "Nature is the best healer 🌼",
    "Plant today, breathe tomorrow 🌳"
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  document.getElementById("final").innerHTML = `
    <h1>💰 Price: ₹${price}</h1>
    <h2>Thank You for Your Purchase!</h2>
    <p>${randomQuote}</p>
  `;
}

function goBack() {
  window.location.href = "search.html";
}

function addToCart(name, price) {

  const qty = parseInt(document.getElementById("qty").value);
  const quantity = isNaN(qty) || qty < 1 ? 1 : qty;

  fetch("/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      price: price,
      quantity: quantity
    })
  })
  .then(res => res.json())
  .then(data => {
    alert(name + " added (" + quantity + ") ✅");
  });
}

function goToBill() {
  window.location.href = "buy.html";
}