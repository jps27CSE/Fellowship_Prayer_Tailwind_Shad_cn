"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Search, Filter } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

const PrayerRequests = () => {
  const [requests, setRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);

  const todayDate = new Date().toLocaleDateString();

  const fetchPrayerRequests = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("prayer_requests").select(
        `
          id,
          category,
          title,
          prayer_description,
          status,
          created_at,
          user_id,
          users (profile_image, name)
        `,
      );

      if (error) {
        console.error("Error fetching prayer requests:", error.message);
        return;
      }

      setRequests(data || []);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrayerRequests();
  }, []);

  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      searchQuery === "" ||
      request.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "All" || request.category === filter;

    return matchesSearch && matchesFilter;
  });

  const renderIconForUrgency = (urgent: boolean) => {
    return urgent ? (
      <span className="text-red-500 font-bold">Urgent</span>
    ) : (
      <span className="text-gray-500">Normal</span>
    );
  };

  return (
    <DashboardLayout>
      <div className="p-6 dark:text-white">
        {/* Sticky Toolbar */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 p-4 shadow-md rounded-xl">
          <h1 className="text-2xl font-bold sm:text-3xl dark:text-white">
            Prayer Requests
          </h1>
          <div className="flex justify-between items-center mt-4">
            {/* Search Bar */}
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-2 shadow-sm space-x-2">
              <Search className="text-gray-500 dark:text-gray-400" />
              <input
                type="text"
                className="bg-transparent outline-none text-sm text-gray-900 dark:text-white placeholder-gray-400"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative">
              <Filter className="text-gray-500 dark:text-gray-400 cursor-pointer" />
              <select
                className="absolute top-0 left-0 bg-white dark:bg-gray-800 border-none text-sm rounded-xl p-2 text-gray-900 dark:text-white shadow-lg"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Health">Health</option>
                <option value="Family">Family</option>
                <option value="Work">Work</option>
              </select>
            </div>

            {/* Today's Date */}
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-md space-x-2">
              <Calendar className="w-6 h-6 text-blue-500" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Today's Date
                </p>
                <p className="text-gray-500 dark:text-gray-400">{todayDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prayer Requests - Categorized */}
        <div>
          <h2 className="text-xl font-bold mb-4">This Week's Requests</h2>
          <div className="space-y-4">
            {loading ? (
              <p>Loading...</p>
            ) : filteredRequests.length > 0 ? (
              filteredRequests.map((request: any) => (
                <div
                  key={request.id}
                  className={`bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md mb-4 flex items-start space-x-4 ${
                    request.status === "urgent" ? "border-2 border-red-500" : ""
                  }`}
                >
                  <Image
                    src={request.users?.profile_image || "/default-profile.png"}
                    alt={request.users?.name || "Anonymous"}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {request.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Calendar
                        size={16}
                        className="text-gray-500 dark:text-gray-400"
                      />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(request.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {request.users?.name || "Anonymous"}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {request.prayer_description}
                    </p>
                    {renderIconForUrgency(request.status === "urgent")}
                  </div>
                </div>
              ))
            ) : (
              <p>No prayer requests available.</p>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PrayerRequests;
