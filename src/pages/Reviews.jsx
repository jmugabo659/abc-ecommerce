function Reviews() {
  return (
    <div className="nested-page">
      <h2>Customer Reviews</h2>

      <div className="review">
        <div>
          <strong>Jean</strong>
          <span> ⭐⭐⭐⭐⭐</span>
        </div>

        <p>
          Great product. The quality is very good and delivery
          was fast.
        </p>
      </div>

      <div className="review">
        <div>
          <strong>Eric</strong>
          <span> ⭐⭐⭐⭐</span>
        </div>

        <p>
          Good product for the price. I am satisfied with my
          purchase.
        </p>
      </div>
    </div>
  );
}

export default Reviews;