import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>ABC Store</h3>
          <p>
            Your trusted online shopping store in Kayonza District,
            Eastern Province, Rwanda.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>
          © {new Date().getFullYear()} ABC Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;