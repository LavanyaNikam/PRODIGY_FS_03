import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="bg-white border-t text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} ShopEase — Your Local Store Online
      </footer>
    </div>
  );
}
