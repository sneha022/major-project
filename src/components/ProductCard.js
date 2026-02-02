function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>₹{price}</p>
    </div>
  );
}

export default ProductCard;
