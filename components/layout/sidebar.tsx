"use client";
import Link from "next/link";
import {
  Home,
  Calendar,
  FileText,
  Folder,
  MessageCircle,
  Settings,
  User,
  Bell, // Import the Bell icon for Announcements
  Church, // Import the Church icon for Churches Hub
} from "lucide-react";
import { useAuthContext } from "@/providers/authProvider";

const Sidebar = () => {
  const { user, loading } = useAuthContext();
  console.log(user);

  return (
    <nav className="w-16 sm:w-32 md:w-64 bg-white dark:bg-gray-950 shadow-md sticky top-0 h-screen">
      <ul className="space-y-2">
        {/* Dashboard Link */}
        <li>
          <Link
            href="/dashboard"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Home className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
              Dashboard
            </span>
          </Link>
        </li>

        {/* Prayer Events Link */}
        <li>
          <Link
            href="/dashboard/events"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Calendar className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
              Prayer Events
            </span>
          </Link>
        </li>

        {/* Prayer Requests Link */}
        <li>
          <Link
            href="/dashboard/requests"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FileText className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
              Prayer Requests
            </span>
          </Link>
        </li>

        {/* Churches Hub Link */}
        <li>
          <Link
            href="/dashboard/churches"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Church className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
              Churches Hub
            </span>
          </Link>
        </li>

        {/* Announcements Link */}
        <li>
          <Link
            href="/dashboard/announcements"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Bell className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
              Announcements
            </span>
          </Link>
        </li>

        {/* Resources Link */}
        <li>
          <Link
            href="/dashboard/resources"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Folder className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
              Resources
            </span>
          </Link>
        </li>

        {/* Feedback/Report Bug Link */}
        <li>
          <Link
            href="/dashboard/feedback"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <MessageCircle className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
              Feedback / Report Bug
            </span>
          </Link>
        </li>

        {/* Admin Panel Link */}
        <li>
          <Link
            href="/dashboard/admin"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Settings className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
              Admin Panel
            </span>
          </Link>
        </li>

        {/* User Profile */}
        <div className="mt-96">
          <Link
            href="/dashboard/profile"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <User className="w-6 h-6 text-gray-700 dark:text-gray-300 mr-2" />
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
              {!loading ? user?.name || "User Profile" : "Loading..."}
            </span>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
