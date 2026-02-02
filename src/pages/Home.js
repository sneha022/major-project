import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import FlipCard from "../components/FlipCard";
import { getProducts } from "../api/api";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Failed to load products", err);
      }
    }

    loadProducts();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Multi-Tenant Serverless E-Commerce</h1>
        <p>Shop from multiple stores • Powered by AWS Cloud</p>
        <button>Explore Products</button>
      </section>

      {/* PRODUCT SECTION */}
      <div className="container">
        <h2>Featured Products</h2>

        <div className="row">
          {products.map((p) => (
            <ProductCard
              key={p.productId}
              name={p.name}
              price={p.price}
              image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            />
          ))}
        </div>

        <h2>Special Offers</h2>
        <div className="row">
          <FlipCard front="🔥 50% OFF" back="Limited Time" />
          <FlipCard front="⚡ New Arrivals" back="Shop Now" />
          <FlipCard front="🎁 Combo Deals" back="Save More" />
        </div>
      </div>
    </>
  );
}

export default Home;
