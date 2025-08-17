// src/pages/Profile.jsx
import React from "react";

export default function Profile() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // redirect to login page after logout
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      {/* Example user details section */}
      <div className="mb-6">
        <p><strong>Name:</strong> Test User</p>
        <p><strong>Email:</strong> test@example.com</p>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
