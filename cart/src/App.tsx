import { useState } from "react";
import "./App.css";

const INITIAL_CART = [
  { id: 1, name: "Headphones", price: 2499, quantity: 1 },
  { id: 2, name: "Keyboard", price: 3499, quantity: 2 },
  { id: 3, name: "Mouse", price: 999, quantity: 1 },
];

const money = (n: any) =>
  n.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

export default function App() {
  const [items, setItems] = useState(INITIAL_CART);

  const update = (id: any, change: any) =>
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, i.quantity + change) } : i,
      ),
    );

  const remove = (id: any) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const quantity = items.reduce((s, i) => s + i.quantity, 0);
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <main className="cart">
      <h1>Shopping Cart</h1>

      {items.length ? (
        items.map((item) => (
          <article className="cart-item" key={item.id}>
            <span className="item-name">{item.name}</span>
            <span className="unit-price">{money(item.price)}</span>
            <div className="quantity">
              <button onClick={() => update(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => update(item.id, 1)}>+</button>
            </div>
            <strong>{money(item.price * item.quantity)}</strong>
            <button className="remove" onClick={() => remove(item.id)}>
              Remove
            </button>
          </article>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}

      <footer className="cart-total">
        <p>
          Total quantity: <strong>{quantity}</strong>
        </p>
        <h2>Total: {money(total)}</h2>
        <button className="clear-cart" onClick={() => setItems([])}>
          Clear Cart
        </button>
      </footer>
    </main>
  );
}
