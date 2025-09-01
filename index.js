const express = require("express");
const app = express();
app.use(express.json());

const products = [
  { id: 1, name: "Bottle", price: 250 },
  { id: 2, name: "Bag", price: 500 }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/cart", (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id === productId);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json({ total: product.price * quantity });
});

app.listen(3000, () => console.log("Server running"));
