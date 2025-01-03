import Link from "next/link"; // Import Link from next/link
import {
  Home,
  Calendar,
  FileText,
  Folder,
  MessageCircle,
  Settings,
} from "lucide-react";

const Sidebar = () => {
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
            href="/admin"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Settings className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
              Admin Panel
            </span>
          </Link>

          {/* Feedback / Report Bug */}
          <Link
            href="/feedback"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <MessageCircle className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
              Feedback / Report Bug
            </span>
          </Link>
        </div>
      </ul>
      <div className="mt-96">
        <Link
          href="/profile"
          className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <img
            src="/default-profile.png"
            alt="Profile"
            className="w-8 h-8 rounded-full mr-3"
          />
          <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
            {/* Assuming you are storing user details like name in localStorage */}
            {localStorage.getItem("userName") || "User Profile"}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
