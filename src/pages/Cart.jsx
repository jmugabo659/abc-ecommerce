function Cart() {
  return (
    <section className="page">
      <div className="page-header">
        <span className="section-label">SHOPPING</span>

        <h1>Shopping Cart</h1>

        <p>Your selected products will appear here.</p>
      </div>

      <div className="cart-container">
        <div className="cart-empty">
          <div className="cart-icon">🛒</div>

          <h2>Your cart is empty</h2>

          <p>
            You have not added any products to your shopping
            cart yet.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cart;