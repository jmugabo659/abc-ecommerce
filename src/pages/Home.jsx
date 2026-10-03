import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">
      <div className="hero">
        <div className="hero-content">
          <span className="hero-label">WELCOME TO ABC STORE</span>

          <h1>
            Quality Products,
            <br />
            Delivered To You
          </h1>

          <p>
            Discover electronics, fashion, home products and more
            from ABC Store in Kayonza, Rwanda.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="primary-button">
              Shop Now
            </Link>

            <Link to="/profile" className="secondary-button">
              My Profile
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="shopping-icon">🛍️</div>
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <span>🚚</span>
          <h3>Fast Delivery</h3>
          <p>Fast and reliable delivery services.</p>
        </div>

        <div className="feature">
          <span>🔒</span>
          <h3>Secure Shopping</h3>
          <p>Your shopping experience is protected.</p>
        </div>

        <div className="feature">
          <span>⭐</span>
          <h3>Quality Products</h3>
          <p>Choose from our quality products.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;