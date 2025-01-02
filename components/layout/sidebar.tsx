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
    <nav className="w-16 lg:w-64 bg-white dark:bg-gray-800 shadow-md">
      <ul className="space-y-2">
        <li>
          <a
            href="/dashboard"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Home className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
              Dashboard
            </span>
          </a>
        </li>
        <li>
          <a
            href="/dashboard/events"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Calendar className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
              Prayer Events
            </span>
          </a>
        </li>
        <li>
          <a
            href="/dashboard/requests"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FileText className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
              Prayer Requests
            </span>
          </a>
        </li>
        <li>
          <a
            href="/dashboard/resources"
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Folder className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
              Resources
            </span>
          </a>
        </li>

        {/* Other links can go here */}

        {/* Bottom Section */}
        <div>
          {/* Admin Panel */}
          <li>
            <a
              href="/admin"
              className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Settings className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
              <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
                Admin Panel
              </span>
            </a>
          </li>

          {/* Feedback / Report Bug */}
          <li>
            <a
              href="/feedback"
              className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <MessageCircle className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
              <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
                Feedback / Report Bug
              </span>
            </a>
          </li>
        </div>
      </ul>

      {/* User Profile (a little lower from the other sections) */}
      {/*<div className="mt-96">*/}
      {/*    <a*/}
      {/*        href="/profile"*/}
      {/*        className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700"*/}
      {/*    >*/}
      {/*        <img*/}
      {/*            src="/default-profile.png"*/}
      {/*            alt="Profile"*/}
      {/*            className="w-8 h-8 rounded-full mr-3"*/}
      {/*        />*/}
      {/*        <span className="hidden sm:inline text-gray-700 dark:text-gray-300">*/}
      {/*                User Profile*/}
      {/*            </span>*/}
      {/*    </a>*/}
      {/*</div>*/}
    </nav>
  );
};

export default Sidebar;
