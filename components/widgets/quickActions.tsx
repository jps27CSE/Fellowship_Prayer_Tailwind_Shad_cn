import React from "react";
import Link from "next/link";
import { useAuthContext } from "@/providers/authProvider";

const QuickActions = () => {
  const { user } = useAuthContext();

  console.log(user);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Quick Actions
      </h3>
      <div className="space-y-4">
        {(user?.role === "group_admin" && user?.is_prayer_group_admin) ||
        user?.role === "superuser" ? (
          <Link
            href="/dashboard/create_prayer_meeting"
            className="bg-blue-500 text-white py-2 px-4 rounded block text-center"
          >
            Create Prayer Meeting
          </Link>
        ) : null}
        <Link
          href="/dashboard/requests/create"
          className="bg-green-500 text-white py-2 px-4 rounded block text-center"
        >
          Submit Prayer Request
        </Link>
        {(user?.role === "group_admin" && user?.is_prayer_group_admin) ||
        user?.is_church_admin ||
        user?.role === "superuser" ? (
          <Link
            href="/dashboard/notices/create"
            className="bg-yellow-500 text-white py-2 px-4 rounded block text-center"
          >
            Post Notice
          </Link>
        ) : null}
      </div>
    </div>
  );
};
export default QuickActions;
