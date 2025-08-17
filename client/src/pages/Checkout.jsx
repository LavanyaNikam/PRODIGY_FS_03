import { useState } from "react";

export default function Checkout() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    address: "", city: "", state: "", pincode: "",
    payment: "cod",
  });

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // TODO: Call backend: create order + payment
    alert("Order placed! (sample)");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={onSubmit} className="bg-white border rounded-xl p-6 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" placeholder="Full Name" className="border rounded p-3" value={form.name} onChange={onChange} required />
          <input name="phone" placeholder="Phone" className="border rounded p-3" value={form.phone} onChange={onChange} required />
          <input name="email" type="email" placeholder="Email" className="border rounded p-3 md:col-span-2" value={form.email} onChange={onChange} required />
          <input name="address" placeholder="Address" className="border rounded p-3 md:col-span-2" value={form.address} onChange={onChange} required />
          <input name="city" placeholder="City" className="border rounded p-3" value={form.city} onChange={onChange} required />
          <input name="state" placeholder="State" className="border rounded p-3" value={form.state} onChange={onChange} required />
          <input name="pincode" placeholder="Pincode" className="border rounded p-3" value={form.pincode} onChange={onChange} required />
        </div>

        <div className="mt-4">
          <p className="font-semibold mb-2">Payment Method</p>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="cod" checked={form.payment === "cod"} onChange={onChange} />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="card" checked={form.payment === "card"} onChange={onChange} />
              Card
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" value="upi" checked={form.payment === "upi"} onChange={onChange} />
              UPI
            </label>
          </div>
        </div>

        <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg">Place Order</button>
        <p className="text-sm text-gray-500 mt-3">Orders placed before 6 PM ship the same day.</p>
      </form>
    </div>
  );
}
