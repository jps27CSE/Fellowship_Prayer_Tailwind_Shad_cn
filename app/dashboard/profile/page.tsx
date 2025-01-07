"use client";
import { User, Calendar, Key, Edit } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { useAuthContext } from "@/providers/authProvider";
import RequestPrayerGroupAdminButton from "@/components/RequestPrayerGroupAdminButton";
import RequestChurchAdminButton from "@/components/RequestChurchAdminButton";

const Profile = () => {
  const { user } = useAuthContext();
  console.log(user);

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 mb-6">
          {/* Profile Section */}
          <div className="text-center mb-6">
            <div className="relative inline-block">
              <img
                src={user?.profile_image}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <div className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md cursor-pointer">
                <Edit className="text-gray-500 dark:text-gray-400" size={20} />
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              {user?.name}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              {user?.email}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Role: {user?.role}
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-start sm:justify-center">
              <User className="mr-2 text-gray-500 dark:text-gray-400" />
              <p className="text-gray-600 dark:text-gray-300">
                Phone: {user?.phone || "N/A"}
              </p>
            </div>
            <div className="flex items-center justify-start sm:justify-center">
              <Calendar className="mr-2 text-gray-500 dark:text-gray-400" />
              <p className="text-gray-600 dark:text-gray-300">
                Birthday:{" "}
                {user?.birthday_month && user?.birthday_day
                  ? `${user?.birthday_month}/${user?.birthday_day}`
                  : "N/A"}
              </p>
            </div>
            <div className="flex items-center justify-start sm:justify-center">
              <Key className="mr-2 text-gray-500 dark:text-gray-400" />
              <p className="text-gray-600 dark:text-gray-300">
                Account Created:{" "}
                {user?.created_at
                  ? new Date(user.created_at).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>
          </div>

          {/* Admin Request Buttons */}
          {user?.role === "member" && (
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <RequestPrayerGroupAdminButton
                prayerGroupRequestStatus={
                  user?.prayer_group_request_status ?? null
                }
              />
              <RequestChurchAdminButton
                churchRequestStatus={user?.church_request_status ?? null}
              />
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
