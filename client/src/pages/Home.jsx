import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6">
      {/* Hero */}
      <section className="bg-blue-600 text-white p-10 rounded-2xl text-center shadow">
        <h1 className="text-4xl font-extrabold">ShopEase</h1>
        <p className="mt-3 text-lg">
          Your local store, now online. Fresh groceries, trendy fashion, smart electronics.
        </p>
        <Link
          to="/products"
          className="mt-5 inline-block bg-white text-blue-700 font-semibold py-2 px-5 rounded-lg"
        >
          Shop Now
        </Link>
      </section>

      {/* Categories */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Groceries", "Electronics", "Clothing", "Home & Kitchen"].map((cat) => (
            <div
              key={cat}
              className="bg-white p-6 rounded-xl border shadow-sm text-center"
            >
              <p className="font-semibold">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Popular Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              id: "1",
              name: "Fresh Apples (1kg)",
              price: 120,
              image:
                "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&auto=format&fit=crop&q=60",
            },
            {
              id: "2",
              name: "Wireless Earbuds",
              price: 1499,
              image:
                "https://images.unsplash.com/photo-1589391886645-d51941baf7da?w=600&auto=format&fit=crop&q=60",
            },
            {
              id: "3",
              name: "Cotton T-Shirt",
              price: 499,
              image:
                "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&auto=format&fit=crop&q=60",
            },
            {
              id: "4",
              name: "Non-stick Fry Pan",
              price: 899,
              image:
                "https://images.unsplash.com/photo-1586201375761-83865001e31b?w=600&auto=format&fit=crop&q=60",
            },
            {
              id: "5",
              name: "LED Desk Lamp",
              price: 1299,
              image:
                "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&auto=format&fit=crop&q=60",
            },
            {
              id: "6",
              name: "Organic Bananas (1 dozen)",
              price: 80,
              image:
                "https://images.unsplash.com/photo-1574226516831-e1dff420e12e?w=600&auto=format&fit=crop&q=60",
            },
            {
              id: "7",
              name: "Stainless Steel Water Bottle",
              price: 350,
              image:
                "https://images.unsplash.com/photo-1622484212119-dc6c8e7ff17d?w=600&auto=format&fit=crop&q=60",
            },
            {
              id: "8",
              name: "Bluetooth Speaker",
              price: 999,
              image:
                "https://images.unsplash.com/photo-1596443049344-d6bb12b2b1e9?w=600&auto=format&fit=crop&q=60",
            },
          ].map((p) => (
            <div
              key={p.id}
              className="bg-white p-4 rounded-xl border shadow-sm hover:shadow-md"
            >
              <img
                src={p.image}
                alt={p.name}
                className="rounded mb-3 w-full h-48 object-cover"
                loading="lazy" // ← lazy-loading added
              />
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-gray-700">₹{p.price}</p>
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
          ))}
        </div>
      </section>
    </div>
  );
}
