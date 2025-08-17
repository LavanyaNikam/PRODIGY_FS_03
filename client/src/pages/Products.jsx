import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "1", name: "Fresh Apples (1kg)", price: 120, category: "Groceries", img: "https://via.placeholder.com/400x260?text=Apples" },
  { id: "2", name: "Wireless Earbuds", price: 1499, category: "Electronics", img: "https://via.placeholder.com/400x260?text=Earbuds" },
  { id: "3", name: "Cotton T-Shirt", price: 499, category: "Clothing", img: "https://via.placeholder.com/400x260?text=T-Shirt" },
  { id: "4", name: "Non-stick Fry Pan", price: 899, category: "Home & Kitchen", img: "https://via.placeholder.com/400x260?text=Fry+Pan" },
  { id: "5", name: "LED Bulb (9W)", price: 129, category: "Home & Kitchen", img: "https://via.placeholder.com/400x260?text=LED+Bulb" },
  { id: "6", name: "Organic Tomatoes (1kg)", price: 90, category: "Groceries", img: "https://via.placeholder.com/400x260?text=Tomatoes" },
];

export default function Products() {
  // TODO: Replace PRODUCTS with data from backend API
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">All Products</h1>
      <p className="text-gray-600 mb-6">
        Browse everything in one place. Use filters and sorting soon!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map(p => (
          <div key={p.id} className="bg-white rounded-xl shadow border hover:shadow-lg transition">
            <img src={p.img} alt={p.name} className="w-full h-44 object-cover rounded-t-xl" />
            <div className="p-4">
              <p className="text-xs text-gray-500">{p.category}</p>
              <h3 className="font-semibold">{p.name}</h3>
              <p className="mt-1 font-bold">₹{p.price}</p>
              <div className="mt-3 flex gap-2">
                <Link
                  to={`/products/${p.id}`}
                  className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm"
                >
                  View
                </Link>
                <Link
                  to="/cart"
                  className="px-3 py-2 rounded-lg bg-green-600 text-white text-sm"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
