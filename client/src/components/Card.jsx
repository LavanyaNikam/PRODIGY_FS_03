export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
      {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
      {children}
    </div>
  );
}
