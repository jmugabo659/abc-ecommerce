import {
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

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

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <section className="page">
        <div className="empty-state">
          <h1>Product Not Found</h1>
          <p>The requested product does not exist.</p>

          <Link to="/products" className="primary-button">
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page">
      <div className="product-detail">
        <div className="detail-image">
          <span>{product.icon}</span>
        </div>

        <div className="detail-content">
          <span className="product-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <p className="detail-price">
            {product.price.toLocaleString()} RWF
          </p>

          <p>{product.description}</p>

          <button className="primary-button">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="nested-navigation">
        <Link
          to={`/products/${product.id}`}
          className="nested-link"
        >
          Overview
        </Link>

        <Link
          to={`/products/${product.id}/reviews`}
          className="nested-link"
        >
          Reviews
        </Link>

        <Link
          to={`/products/${product.id}/specs`}
          className="nested-link"
        >
          Specifications
        </Link>
      </div>

      <div className="nested-content">
        <Outlet />
      </div>
    </section>
  );
}

export default ProductDetails;