const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

/*  MIDDLEWARE  */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

let cart = [];
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/search", (req, res) => {
  res.sendFile(path.join(__dirname, "search.html"));
});

app.get("/result", (req, res) => {
  res.sendFile(path.join(__dirname, "result.html"));
});

app.get("/buy", (req, res) => {
  res.sendFile(path.join(__dirname, "buy.html"));
});

app.post("/api/cart", (req, res) => {
  const { name, price, quantity } = req.body;

  let existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ name, price, quantity });
  }

  res.json({ message: "Item added", cart });
});

app.get("/api/cart", (req, res) => {
  res.json(cart);
});

app.delete("/api/cart", (req, res) => {
  cart = [];
  res.json({ message: "Cart cleared" });
});


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});