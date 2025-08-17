import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const INITIAL = [
  { id: "2", name: "Wireless Earbuds", price: 1499, qty: 1 },
  { id: "1", name: "Fresh Apples (1kg)", price: 120, qty: 2 },
];

export default function Cart() {
  const [items, setItems] = useState(INITIAL); // TODO: connect to global/cart state
  const subtotal = useMemo(
    () => items.reduce((s, i) => s + i.price * i.qty, 0),
    [items]
  );

  const updateQty = (id, delta) =>
    setItems(prev =>
      prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
    );

  const removeItem = id => setItems(prev => prev.filter(i => i.id !== id));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty. <Link to="/products" className="text-blue-600 underline">Shop now</Link></p>
      ) : (
        <>
          <div className="space-y-3">
            {items.map(i => (
              <div key={i.id} className="flex items-center justify-between bg-white border rounded p-4">
                <div>
                  <h3 className="font-semibold">{i.name}</h3>
                  <p className="text-gray-600">₹{i.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQty(i.id, -1)} className="px-3 py-1 border rounded">-</button>
                  <span className="w-8 text-center">{i.qty}</span>
                  <button onClick={() => updateQty(i.id, +1)} className="px-3 py-1 border rounded">+</button>
                </div>
                <div className="w-20 text-right font-semibold">₹{i.price * i.qty}</div>
                <button onClick={() => removeItem(i.id)} className="text-red-600 underline">Remove</button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <div className="bg-gray-50 border rounded p-4 w-full max-w-sm">
              <div className="flex justify-between">
                <span>Subtotal</span><span className="font-semibold">₹{subtotal}</span>
              </div>
              <div className="flex justify-between mt-1 text-sm text-gray-600">
                <span>Tax (5%)</span><span>₹{Math.round(subtotal * 0.05)}</span>
              </div>
              <div className="flex justify-between mt-2 text-lg font-bold">
                <span>Total</span><span>₹{Math.round(subtotal * 1.05)}</span>
              </div>
              <Link to="/checkout" className="mt-4 block text-center bg-blue-600 text-white rounded-lg py-2">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
