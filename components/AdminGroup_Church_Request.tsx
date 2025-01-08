import React, { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { fetchPendingRequests } from "@/services/fetchPendingRequests";
import { Request } from "@/types/admin_panel_request";

const AdminGroupChurchRequest = () => {
  const [prayerGroupRequests, setPrayerGroupRequests] = useState<Request[]>([]);
  const [churchAdminRequests, setChurchAdminRequests] = useState<Request[]>([]);

  useEffect(() => {
    const loadRequests = async () => {
      const users = (await fetchPendingRequests()) || [];
      console.log("Fetched users:", users);

      // Separate prayer group and church admin requests
      const prayerRequests = users.filter(
        (user) => user.prayer_group_request_status === "pending",
      );
      const churchRequests = users.filter(
        (user) => user.church_request_status === "pending",
      );

      setPrayerGroupRequests(prayerRequests);
      setChurchAdminRequests(churchRequests);
    };

    loadRequests();
  }, []);

  return (
    <div className="mt-8">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Manage Requests
        </h2>

        {/* Prayer Group Admin Requests */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Prayer Group Admin Requests
          </h3>
          {prayerGroupRequests.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">
              No Prayer Group Admin Requests available
            </p>
          ) : (
            <div className="space-y-4 mt-4">
              {prayerGroupRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center">
                    {/* Profile Picture */}
                    <img
                      src={
                        request.profile_image || "/path/to/default-profile.jpg"
                      }
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover mr-4"
                    />
                    <div className="flex flex-col">
                      <p className="text-gray-900 dark:text-white">
                        {request.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {request.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="px-2 py-1 text-sm rounded-full bg-yellow-500 text-yellow-900">
                      Pending
                    </span>
                    <div className="ml-4 flex space-x-2">
                      <button className="text-green-500 hover:text-green-600">
                        <CheckCircle size={20} />
                      </button>
                      <button className="text-red-500 hover:text-red-600">
                        <XCircle size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Church Admin Requests */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Church Admin Requests
          </h3>
          {churchAdminRequests.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">
              No Church Admin Requests available
            </p>
          ) : (
            <div className="space-y-4 mt-4">
              {churchAdminRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center">
                    {/* Profile Picture */}
                    <img
                      src={
                        request.profile_image || "/path/to/default-profile.jpg"
                      }
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover mr-4"
                    />
                    <div className="flex flex-col">
                      <p className="text-gray-900 dark:text-white">
                        {request.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {request.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="px-2 py-1 text-sm rounded-full bg-yellow-500 text-yellow-900">
                      Pending
                    </span>
                    <div className="ml-4 flex space-x-2">
                      <button className="text-green-500 hover:text-green-600">
                        <CheckCircle size={20} />
                      </button>
                      <button className="text-red-500 hover:text-red-600">
                        <XCircle size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminGroupChurchRequest;
