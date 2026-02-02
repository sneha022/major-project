const API_BASE =
  "https://j5i5ng6w77.execute-api.ap-south-1.amazonaws.com/prod";


// GET products
export const getProducts = async () => {
  const res = await fetch(`${API_BASE}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

// ADD product
export const addProduct = async (product) => {
  const res = await fetch(`${API_BASE}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(text);
    throw new Error("Failed to add product");
  }

  return res.json();
};
