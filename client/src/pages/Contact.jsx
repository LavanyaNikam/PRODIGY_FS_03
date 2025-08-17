export default function Contact() {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <form className="bg-white border rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-4">Contact ShopEase</h1>
        <input placeholder="Your Name" className="w-full border rounded p-3 mb-3" />
        <input type="email" placeholder="Your Email" className="w-full border rounded p-3 mb-3" />
        <textarea rows="5" placeholder="Message" className="w-full border rounded p-3 mb-3" />
        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg">Send Message</button>
      </form>

      <div className="bg-gray-50 border rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-2">Store Info</h2>
        <p className="text-gray-700">ShopEase, 45 Main Street, Pune, Maharashtra</p>
        <p className="text-gray-700">Phone: +91 98765 43210</p>
        <p className="text-gray-700">Email: support@shopease.com</p>
        <p className="text-gray-700 mt-2">Hours: Mon–Sat, 9 AM – 8 PM</p>
      </div>
    </div>
  );
}
