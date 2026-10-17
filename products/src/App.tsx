import "./App.css";

type Product = {
  id: number;
  name: string;
  price: string;
};

const PRODUCTS: Product[] = [
  { id: 1, name: "Wireless Headphones", price: "₹2,499" },
  { id: 2, name: "Mechanical Keyboard", price: "₹3,499" },
  { id: 3, name: "Wireless Mouse", price: "₹999" },
  { id: 4, name: "USB-C Hub", price: "₹1,499" },
  { id: 5, name: "Laptop Stand", price: "₹1,299" },
  { id: 6, name: "Webcam HD", price: "₹2,199" },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <div>
          <p className="eyebrow">Products MFE - Standalone</p>
          <h1>Products</h1>
        </div>
      </header>
      <main className="main">
        <div className="grid">
          {PRODUCTS.map((product) => (
            <article className="card" key={product.id}>
              <h2>{product.name}</h2>
              <p className="price">{product.price}</p>
              <button type="button">Add to cart</button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
