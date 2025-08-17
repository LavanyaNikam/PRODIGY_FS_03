export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p className="mb-6">Manage products, orders, and users from here.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-purple-100 p-4 rounded shadow">
          <h3 className="font-semibold">Product Management</h3>
          <p>Add, update, or delete products from the store.</p>
        </div>
        <div className="bg-orange-100 p-4 rounded shadow">
          <h3 className="font-semibold">Order Management</h3>
          <p>View, process, or cancel customer orders.</p>
        </div>
        <div className="bg-red-100 p-4 rounded shadow">
          <h3 className="font-semibold">User Management</h3>
          <p>Manage registered customers and sellers.</p>
        </div>
      </div>
    </div>
  );
}
