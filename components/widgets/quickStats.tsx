import { Bell, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const QuickStats = () => {
  const [upComingMeetingsCount, setUpComingMeetingsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUpcomingMeetings = async () => {
      try {
        const { data, error } = await supabase
          .from("meetings")
          .select("*", { count: "exact" })
          .gte("scheduled_time", new Date().toISOString());

        if (error) throw error;

        if (data) {
          setUpComingMeetingsCount(data.length);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUpcomingMeetings();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
      {/* Upcoming Meetings */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex flex-col items-center space-y-4">
        <div className="text-blue-500 mb-2">
          <Calendar size={32} />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Prayer Meetings
          </h3>
          {loading ? (
            <p className="text-gray-600 dark:text-gray-300">Loading...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            <p className="text-gray-600 dark:text-gray-300">
              {upComingMeetingsCount} upcoming events
            </p>
          )}
          <Link href="/dashboard/events" className="text-blue-500">
            View All
          </Link>
        </div>
      </div>

      {/* Prayer Requests */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex flex-col items-center space-y-4">
        <div className="text-green-500 mb-2">
          <MessageSquare size={32} />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
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
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex flex-col items-center space-y-4">
        <div className="text-yellow-500 mb-2">
          <Bell size={32} />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Notice
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
