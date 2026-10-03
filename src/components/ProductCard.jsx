import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <span>{product.icon}</span>
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-bottom">
          <strong>
            {product.price.toLocaleString()} RWF
          </strong>

          <Link
            to={`/products/${product.id}`}
            className="details-button"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;