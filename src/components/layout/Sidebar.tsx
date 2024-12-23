import { Home, FileText, Settings, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  const links = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: FileText, label: "Invoices", path: "/invoices" },
    { icon: Mail, label: "Email Setup", path: "/email-setup" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-4">
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-gray-800">Invoice Pro</h1>
      </div>
      <nav className="space-y-2">
        {links.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              location.pathname === path
                ? "bg-primary text-primary-foreground"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Icon className="w-5 h-5 mr-3" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};