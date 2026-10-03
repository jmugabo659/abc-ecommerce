import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Smartphone",
    category: "electronics",
    price: 350000,
    description: "Modern smartphone with excellent performance.",
    icon: "📱",
  },
  {
    id: 2,
    name: "Laptop",
    category: "electronics",
    price: 850000,
    description: "Powerful laptop for work and study.",
    icon: "💻",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    category: "electronics",
    price: 85000,
    description: "Comfortable wireless headphones with clear sound.",
    icon: "🎧",
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "fashion",
    price: 65000,
    description: "Comfortable shoes for everyday activities.",
    icon: "👟",
  },
  {
    id: 5,
    name: "T-Shirt",
    category: "fashion",
    price: 25000,
    description: "Quality cotton T-shirt.",
    icon: "👕",
  },
  {
    id: 6,
    name: "Office Chair",
    category: "home",
    price: 180000,
    description: "Comfortable ergonomic office chair.",
    icon: "🪑",
  },
];

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");
  const price = searchParams.get("price");

  let filteredProducts = [...products];

  // Category filtering
  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Price filtering
  if (price === "low") {
    filteredProducts = filteredProducts.filter(
      (product) => product.price < 100000
    );
  }

  if (price === "high") {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= 100000
    );
  }

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <section className="page">
      <div className="page-header">
        <span className="section-label">OUR PRODUCTS</span>

        <h1>Products</h1>

        <p>
          Browse our products and use the filters to find what
          you need.
        </p>
      </div>

      <div className="filters">
        <button
          onClick={clearFilters}
          className={!category && !price ? "filter active-filter" : "filter"}
        >
          All Products
        </button>

        <button
          onClick={() =>
            setSearchParams({ category: "electronics" })
          }
          className={
            category === "electronics"
              ? "filter active-filter"
              : "filter"
          }
        >
          Electronics
        </button>

        <button
          onClick={() =>
            setSearchParams({ category: "fashion" })
          }
          className={
            category === "fashion"
              ? "filter active-filter"
              : "filter"
          }
        >
          Fashion
        </button>

        <button
          onClick={() =>
            setSearchParams({ category: "home" })
          }
          className={
            category === "home"
              ? "filter active-filter"
              : "filter"
          }
        >
          Home
        </button>

        <button
          onClick={() =>
            setSearchParams({ price: "low" })
          }
          className={
            price === "low"
              ? "filter active-filter"
              : "filter"
          }
        >
          Under 100,000 RWF
        </button>

        <button
          onClick={() =>
            setSearchParams({ price: "high" })
          }
          className={
            price === "high"
              ? "filter active-filter"
              : "filter"
          }
        >
          100,000+ RWF
        </button>
      </div>

      <div className="filter-status">
        {category && (
          <p>
            Category filter: <strong>{category}</strong>
          </p>
        )}

        {price && (
          <p>
            Price filter: <strong>{price}</strong>
          </p>
        )}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No products found</h2>
          <p>Try another filter.</p>

          <button
            onClick={clearFilters}
            className="primary-button"
          >
            View All Products
          </button>
        </div>
      )}
    </section>
  );
}

export default Products;