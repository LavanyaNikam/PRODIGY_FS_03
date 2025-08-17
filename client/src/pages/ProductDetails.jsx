import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const SAMPLE = {
  "1": { name: "Fresh Apples (1kg)", price: 120, stock: 20, img: "https://via.placeholder.com/600x360?text=Apples",
         desc: "Handpicked, farm-fresh apples. Crisp, juicy and pesticide-safe." },
  "2": { name: "Wireless Earbuds", price: 1499, stock: 35, img: "https://via.placeholder.com/600x360?text=Earbuds",
         desc: "Bluetooth 5.0, up to 8h battery, pocket charging case." },
  "3": { name: "Cotton T-Shirt", price: 499, stock: 50, img: "https://via.placeholder.com/600x360?text=T-Shirt",
         desc: "100% cotton, breathable fabric, available in multiple colors." },
  "4": { name: "Non-stick Fry Pan", price: 899, stock: 15, img: "https://via.placeholder.com/600x360?text=Fry+Pan",
         desc: "Durable non-stick coating, comfy handle, easy to clean." },
};

export default function ProductDetails() {
  const { id } = useParams();
  const data = SAMPLE[id]; // TODO: fetch from backend by id
  const [qty, setQty] = useState(1);

  if (!data) {
    return (
      <div className="p-6">
        <p className="text-red-600 font-semibold">Product not found.</p>
        <Link to="/products" className="text-blue-600 underline">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <img src={data.img} alt={data.name} className="w-full rounded-xl shadow" />

      <div>
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="mt-2 text-gray-600">{data.desc}</p>
        <p className="mt-4 text-2xl font-extrabold">₹{data.price}</p>
        <p className="mt-1 text-sm text-gray-500">Stock: {data.stock > 0 ? "In Stock" : "Out of Stock"}</p>

        <div className="mt-4 flex items-center gap-3">
          <label className="text-sm">Qty</label>
          <input
            type="number"
            min="1"
            value={qty}
            onChange={e => setQty(Math.max(1, Number(e.target.value)))}
            className="w-20 border rounded p-2"
          />
        </div>

        <div className="mt-5 flex gap-3">
          <Link to="/cart" className="px-5 py-2 rounded-lg bg-green-600 text-white">Add to Cart</Link>
          <Link to="/checkout" className="px-5 py-2 rounded-lg bg-blue-600 text-white">Buy Now</Link>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold mb-2">Reviews</h3>
          <div className="bg-gray-50 border rounded p-4">
            <p className="text-sm">“Great value for money.” — Priya S. ★★★★☆</p>
          </div>
        </div>

        <Link to="/products" className="inline-block mt-6 text-blue-600 underline">← Back to Products</Link>
      </div>
    </div>
  );
}
