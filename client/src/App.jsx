import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import OrderTracking from "./pages/OrderTracking";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/products" element={<MainLayout><Products /></MainLayout>} />
      <Route path="/products/:id" element={<MainLayout><ProductDetails /></MainLayout>} />
      <Route path="/cart" element={<MainLayout><Cart /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Protected routes */}
      <Route
        path="/checkout"
        element={<PrivateRoute><MainLayout><Checkout /></MainLayout></PrivateRoute>}
      />
      <Route
        path="/track-order"
        element={<PrivateRoute><MainLayout><OrderTracking /></MainLayout></PrivateRoute>}
      />
      <Route
        path="/dashboard"
        element={<PrivateRoute><MainLayout><Dashboard /></MainLayout></PrivateRoute>}
      />
      <Route
        path="/profile"
        element={<PrivateRoute><MainLayout><Profile /></MainLayout></PrivateRoute>}
      />

      {/* Admin only (can later make AdminRoute) */}
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}
