import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Reviews from "./pages/Reviews";
import Specs from "./pages/Specs";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Redirect old URL */}
          <Route path="/home" element={<Navigate to="/" replace />} />

          {/* Products */}
          <Route path="/products" element={<Products />} />

          {/* Product details with nested routes */}
          <Route path="/products/:id" element={<ProductDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="specs" element={<Specs />} />
          </Route>

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* Profile */}
          <Route path="/profile" element={<Profile />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;