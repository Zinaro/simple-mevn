import express from 'express';
import {
  cartItems as cartItemsRaw,
  products as productsRaw,
} from './src/temp-db.js';

let cartItems = cartItemsRaw;
let products = productsRaw;

// Create the Express server
const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello');
});

app.get('/products', (req, res) => {
  res.json(products);
});

function populatedCardIds(ids) {
  return ids.map((id) => products.find((product) => product.id === id));
}

app.get('/cart', (req, res) => {
  const populatedCart = populatedCardIds(cartItems);
  res.json(populatedCart);
});

app.get('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  const product = products.find((product) => product.id === productId);
  res.json(product);
});

app.post('/cart', (req, res) => {
  const productId = req.body.Id;
  cartItems.push(productId);
  const populatedCart = populatedCardIds(cartItems);
  res.json(populatedCart);
});

app.delete('/cart/:productId', (req, res) => {
  const productId = req.params.productId;
  cartItems = cartItems.filter((id) => id !== productId);
  const populatedCart = populatedCardIds(cartItems);
  res.json(populatedCart);
});

// Start the server
app.listen(8000, () => {
  console.log(`Server listening on port 8000`);
});
