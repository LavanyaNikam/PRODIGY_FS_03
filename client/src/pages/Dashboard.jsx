export default function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <p className="mb-4">
        Welcome back! Here’s a quick overview of your account.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h3 className="font-semibold">My Orders</h3>
          <p>Track your recent and past orders.</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="font-semibold">Wishlist</h3>
          <p>View products you’ve saved for later.</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h3 className="font-semibold">Account Settings</h3>
          <p>Update your profile and preferences.</p>
        </div>
      </div>
    </div>
  );
}
