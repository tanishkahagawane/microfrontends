import { useCallback, useEffect, useState } from "react";
import {
  CART_ADD_EVENT,
  readCartItems,
  writeCartItems,
  type CartItem,
  type CartAddDetail,
} from "@microshop/cart-contract";
import "./App.css";

const money = (n: number) =>
  n.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

export default function App() {
  const [items, setItems] = useState<CartItem[]>(() => readCartItems());

  // Persist changes and synchronize the cart with sessionStorage.
  const saveItems = useCallback((next: CartItem[]) => {
    writeCartItems(next);
    setItems(next);
  }, []);

  // Listen for products added by the Products micro-frontend.
  useEffect(() => {
    const handleCartAdd = (event: Event) => {
      const { detail } = event as CustomEvent<CartAddDetail>;

      setItems((prev) => {
        const existing = prev.find((item) => item.id === detail.id);

        const next = existing
          ? prev.map((item) =>
              item.id === detail.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            )
          : [...prev, { ...detail, quantity: 1 }];

        writeCartItems(next);
        return next;
      });
    };

    window.addEventListener(CART_ADD_EVENT, handleCartAdd);

    return () => {
      window.removeEventListener(CART_ADD_EVENT, handleCartAdd);
    };
  }, []);

  const update = (id: string, change: number) => {
    const next = items.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item,
    );

    saveItems(next);
  };

  const remove = (id: string) => {
    saveItems(items.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    saveItems([]);
  };

  const quantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <main className="cart">
      <h1>Shopping Cart</h1>

      {items.length > 0 ? (
        items.map((item) => (
          <article className="cart-item" key={item.id}>
            <span className="item-name">{item.name}</span>

            <span className="unit-price">{money(item.price)}</span>

            <div className="quantity">
              <button
                type="button"
                onClick={() => update(item.id, -1)}
                disabled={item.quantity <= 1}
                aria-label={`Decrease ${item.name} quantity`}
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                type="button"
                onClick={() => update(item.id, 1)}
                aria-label={`Increase ${item.name} quantity`}
              >
                +
              </button>
            </div>

            <strong>{money(item.price * item.quantity)}</strong>

            <button
              type="button"
              className="remove"
              onClick={() => remove(item.id)}
            >
              Remove
            </button>
          </article>
        ))
      ) : (
        <p>Your cart is empty. Add products to get started.</p>
      )}

      <footer className="cart-total">
        <p>
          Total quantity: <strong>{quantity}</strong>
        </p>

        <h2>Total: {money(total)}</h2>

        <button
          type="button"
          className="clear-cart"
          onClick={clearCart}
          disabled={items.length === 0}
        >
          Clear Cart
        </button>
      </footer>
    </main>
  );
}
