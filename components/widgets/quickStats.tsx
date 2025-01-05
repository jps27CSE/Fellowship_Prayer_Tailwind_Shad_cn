import { Bell, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";

const QuickStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
      {/* Upcoming Meetings */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4">
        <div className="text-blue-500">
          <Calendar size={32} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Prayer Meetings
          </h3>
          <p className="text-gray-600 dark:text-gray-300">2 upcoming events</p>
          <Link href="/dashboard/events" className="text-blue-500">
            View All
          </Link>
        </div>
      </div>

      {/* Prayer Requests */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4">
        <div className="text-green-500">
          <MessageSquare size={32} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Prayer Requests
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            5 new requests today
          </p>
          <Link href="/dashboard/requests" className="text-blue-500">
            View All
          </Link>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4">
        <div className="text-yellow-500">
          <Bell size={32} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Announcements
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Latest notice headline
          </p>
          <Link href="/dashboard/annoucements" className="text-blue-500">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
