"use client";
import Link from "next/link"; // Import Link from next/link
import {
  Home,
  Calendar,
  FileText,
  Folder,
  MessageCircle,
  Settings,
  User,
} from "lucide-react";
import { useAuthContext } from "@/providers/authProvider";

const Sidebar = () => {
  const { user, loading } = useAuthContext();
  console.log(user);
  return (
    <nav className="w-16 lg:w-64 bg-white dark:bg-gray-950 shadow-md sticky top-0 h-screen">
      <ul className="space-y-2">
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

        {/* Other links can go here */}

        {/* Bottom Section */}
        <div>
          {/* Admin Panel */}
          <Link
            href="/dashboard/admin"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Settings className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
              Admin Panel
            </span>
          </Link>

          {/* Feedback / Report Bug */}
          <Link
            href="/dashboard/feedback"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <MessageCircle className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
              Feedback / Report Bug
            </span>
          </Link>
        </div>
        <div className="mt-96">
          <Link
            href="/dashboard/profile"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {/* Profile Picture Icon */}
            <User className="w-6 h-6 text-gray-700 dark:text-gray-300 mr-2" />

            {/* User Name */}
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
