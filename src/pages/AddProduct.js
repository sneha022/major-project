import { useState } from "react";
import { addProduct } from "../api/api";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = async () => {
  console.log("Add Product clicked"); // 👈 add this
  try {
    await addProduct({
      name,
      price: Number(price)
    });
    alert("Product added successfully");
  } catch (err) {
    alert("Failed to add product");
    console.error(err);
  }
};


  return (
    <div className="container">
      <h2>Add Product (Tenant)</h2>

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleAdd}>Add Product</button>
    </div>
  );
}

export default AddProduct;
