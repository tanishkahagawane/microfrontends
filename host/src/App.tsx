import { lazy, Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

type Page = "home" | "products" | "cart";

const ProductList = lazy(() => import("products/ProductList"));
const Cart = lazy(() => import("cart/Cart"));

function App() {
  const [page, setPage] = useState<Page>("home");
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <strong className="brand">Microshop</strong>
          <nav className="nav">
            <NavLink
              to={"/"}
              end
              className={({ isActive }) =>
                isActive ? "nav link active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/products"}
              end
              className={({ isActive }) =>
                isActive ? "nav link active" : "nav-link"
              }
            >
              Products
            </NavLink>
            <NavLink
              to={"/cart"}
              end
              className={({ isActive }) =>
                isActive ? "nav link active" : "nav-link"
              }
            >
              Cart
            </NavLink>
            {/* <button
            type="button"
            className={page === "home" ? "nav link active" : "nav-link"}
            onClick={() => setPage("home")}
          >
            Home
          </button>
          <button
            type="button"
            className={page === "products" ? "nav link active" : "nav-link"}
            onClick={() => setPage("products")}
          >
            Products
          </button>
          <button
            type="button"
            className={page === "cart" ? "nav link active" : "nav-link"}
            onClick={() => setPage("cart")}
          >
            Cart
          </button> */}
          </nav>
        </header>

        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <section className="panel">
                  <h1>Host/Shell</h1>
                </section>
              }
            ></Route>
            <Route
              path="/products"
              element={
                <Suspense
                  fallback={
                    <p className="loading">Loading products remote...</p>
                  }
                >
                  <ProductList />
                </Suspense>
              }
            ></Route>
            <Route
              path="/cart"
              element={
                <Suspense
                  fallback={<p className="loading">Loading cart remote...</p>}
                >
                  <Cart />
                </Suspense>
              }
            ></Route>
          </Routes>
          {/* {page === "home" && (
            <section className="panel">
              <h1>Host/Shell</h1>
            </section>
          )}
          {page === "products" && (
            <section className="panel">
              <h1>Products</h1>
              <p className="muted">Products remote will render here </p>
            </section>
          )}
          {page === "cart" && (
            <section className="panel">
              <h1>Cart</h1>
              <p className="muted">cart remote will render here </p>
            </section>
          )} */}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
