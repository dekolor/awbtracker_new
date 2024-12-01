import Link from "next/link";
import { Home, Package, Settings } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-800 h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 border-b">
          <span className="text-2xl font-bold">AWB Tracker</span>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="p-4 space-y-2">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/tracking"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Package className="h-5 w-5" />
                <span>Tracking</span>
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
