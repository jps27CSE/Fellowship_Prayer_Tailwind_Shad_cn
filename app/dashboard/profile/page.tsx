"use client";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "@/providers/authProvider";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { supabase } from "@/lib/supabase";
import RequestPrayerGroupAdminButton from "@/components/RequestPrayerGroupAdminButton";
import RequestChurchAdminButton from "@/components/RequestChurchAdminButton";
import {
  requestChurchAdmin,
  requestPrayerGroupAdmin,
} from "@/services/requestToAdminService";
import { Calendar, Edit, Key, User } from "lucide-react";

const Profile = () => {
  const { user } = useAuthContext(); // Getting user from context
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [prayerGroupRequestStatus, setPrayerGroupRequestStatus] = useState<
    string | null
  >(user?.prayer_group_request_status ?? null);
  const [churchRequestStatus, setChurchRequestStatus] = useState<string | null>(
    user?.church_request_status ?? null,
  );

  useEffect(() => {
    if (user) {
      fetchUserData(user.auth_uuid);
    }
  }, [user]);

  const fetchUserData = async (authUuid: string) => {
    const { data, error } = await supabase
      .from("users")
      .select("prayer_group_request_status, church_request_status")
      .eq("auth_uuid", authUuid)
      .single();

    if (error) {
      console.error("Error fetching user data:", error.message);
    } else {
      setPrayerGroupRequestStatus(data?.prayer_group_request_status ?? null);
      setChurchRequestStatus(data?.church_request_status ?? null);
    }
  };

  const handleRequestPrayerGroupAdmin = async () => {
    if (!user) return;

    setLoading(true);
    setErrorMessage(null);

    const response = await requestPrayerGroupAdmin(user.auth_uuid);

    if (!response.success) {
      setErrorMessage(response.error); // Set error message if something goes wrong
      toast.error("Something went wrong. Please try again later.");
    } else {
      toast.success("Prayer Group Admin request submitted successfully.");
      setPrayerGroupRequestStatus("pending");
    }

    setLoading(false);
  };

  const handleRequestChurchAdmin = async () => {
    if (!user) return;

    setLoading(true);
    setErrorMessage(null);

    const response = await requestChurchAdmin(user.auth_uuid);

    if (!response.success) {
      setErrorMessage(response.error); // Set error message if something goes wrong
      toast.error("Something went wrong. Please try again later.");
    } else {
      toast.success("Church Admin request submitted successfully.");
      setChurchRequestStatus("pending"); // Update status locally after success
    }

    setLoading(false);
  };

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
                prayerGroupRequestStatus={prayerGroupRequestStatus}
                onClick={handleRequestPrayerGroupAdmin}
                loading={loading}
              />
              <RequestChurchAdminButton
                churchRequestStatus={churchRequestStatus} // Use updated status
                onClick={handleRequestChurchAdmin}
                loading={loading}
              />
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
