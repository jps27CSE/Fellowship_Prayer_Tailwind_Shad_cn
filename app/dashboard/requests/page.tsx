"use client";
import React, { useState } from "react";
import { Calendar, PlusCircle, Search, Filter } from "lucide-react";
import DashboardLayout from "@/components/layout/dashboard-layout";

const PrayerRequests = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const requests = [
    {
      id: 1,
      name: "John Doe",
      image: "https://via.placeholder.com/150",
      title: "Healing Prayer",
      content:
        "Please pray for healing for my family and myself during this time of sickness.",
      date: "01/15/2025",
      category: "Health",
      urgent: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://via.placeholder.com/150",
      title: "Peace in Family",
      content:
        "Prayers for peace and unity in my family and strength during challenging times.",
      date: "01/14/2025",
      category: "Family",
      urgent: false,
    },
    // ...more requests
  ];

  const todayDate = new Date().toLocaleDateString();

  const filteredRequests = requests.filter((request) => {
    return (
      (filter === "All" || request.category === filter) &&
      (searchQuery === "" ||
        request.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <DashboardLayout>
      <div className="p-6 dark:text-white">
        {/* Sticky Toolbar */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 p-4 shadow-md rounded-xl">
          <h1 className="text-2xl font-bold sm:text-3xl dark:text-white">
            Prayer Requests
          </h1>
          <div className="flex justify-between items-center mt-4">
            {/* Prayer Request Button */}
            <button className="flex items-center rounded-xl text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 space-x-2">
              <PlusCircle className="w-5 h-5" />
              <span>Submit Prayer Request</span>
            </button>

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

        {/* Daily/Weekly Highlights */}
        <div className="my-6">
          <h2 className="text-xl font-bold mb-4">Today's Highlights</h2>
          <div className="flex space-x-4">
            {requests.slice(0, 3).map((request) => (
              <div
                key={request.id}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-xl shadow-md w-64 hover:scale-105 transition-transform"
              >
                <h3 className="text-lg font-bold">{request.title}</h3>
                <p className="text-sm">{request.content.slice(0, 60)}...</p>
                <p className="text-xs mt-2">Category: {request.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prayer Requests - Categorized */}
        <div>
          <h2 className="text-xl font-bold mb-4">This Week's Requests</h2>
          <div className="space-y-4">
            {filteredRequests
              .filter((request) => new Date(request.date) >= new Date())
              .map((request) => (
                <div
                  key={request.id}
                  className={`flex items-start p-4 rounded-xl shadow-md bg-white dark:bg-gray-800 ${
                    request.urgent ? "border-2 border-red-500" : ""
                  }`}
                >
                  <img
                    src={request.image}
                    alt={request.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{request.title}</h3>
                    <p className="text-sm text-gray-500">{request.name}</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {request.content}
                    </p>
                    {request.urgent && (
                      <span className="text-red-500 font-bold">Urgent</span>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PrayerRequests;
