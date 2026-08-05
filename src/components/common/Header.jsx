import { BarChart3 } from "lucide-react";

function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white">
      <div className="flex items-center gap-4">
        <BarChart3 size={40} />

        <div>
          <h1 className="text-4xl font-bold">
            Trading Risk Dashboard
          </h1>

          <p className="text-blue-100 mt-2">
            Monitor your account health and trading risk in real time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;