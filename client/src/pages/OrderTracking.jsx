import { useState } from "react";

const STATUSES = ["Order Placed", "Processing", "Shipped", "Out for Delivery", "Delivered"];

export default function OrderTracking() {
  const [orderId, setOrderId] = useState("");
  const [step, setStep] = useState(null);

  const track = e => {
    e.preventDefault();
    // TODO: Replace with backend call /api/orders/:id
    const fakeStep = (orderId.length % STATUSES.length); // simple demo
    setStep(fakeStep);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Track Your Order</h1>
      <form onSubmit={track} className="flex gap-3 mb-6">
        <input
          placeholder="Enter Order ID"
          value={orderId}
          onChange={e => setOrderId(e.target.value)}
          className="border rounded p-3 w-64"
          required
        />
        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg">Track</button>
      </form>

      {step !== null && (
        <div className="bg-white border rounded-xl p-6">
          <h2 className="font-semibold mb-3">Status</h2>
          <ol className="space-y-2">
            {STATUSES.map((s, i) => (
              <li key={s} className={`p-3 rounded border ${i <= step ? "bg-green-50 border-green-300" : "bg-gray-50"}`}>
                {i <= step ? "✅" : "⏳"} {s}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
