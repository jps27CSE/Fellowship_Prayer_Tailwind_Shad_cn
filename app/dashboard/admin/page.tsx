"use client";
import React from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { Settings, Users, FileText, BarChart } from "lucide-react";
import AdminGroupChurchRequest from "@/components/AdminGroup_Church_Request"; // Importing icons for the UI

const Admin = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto p-6">
        {/* Admin Dashboard Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Manage your app, users, and settings
          </p>
        </div>

        {/* Admin Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Users Section */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users
                  className="text-gray-500 dark:text-gray-400 mr-3"
                  size={30}
                />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Users
                </h2>
              </div>
              <p className="text-3xl font-bold text-blue-500">230</p>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Total registered users
            </p>
          </div>

          {/* Reports Section */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FileText
                  className="text-gray-500 dark:text-gray-400 mr-3"
                  size={30}
                />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Reports
                </h2>
              </div>
              <p className="text-3xl font-bold text-blue-500">45</p>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Pending reports
            </p>
          </div>

          {/* Statistics Section */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <BarChart
                  className="text-gray-500 dark:text-gray-400 mr-3"
                  size={30}
                />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Statistics
                </h2>
              </div>
              <p className="text-3xl font-bold text-blue-500">8%</p>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Growth rate in the last month
            </p>
          </div>
        </div>

        {/* Admin Actions */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Settings Section */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Settings
                  className="text-gray-500 dark:text-gray-400 mr-3"
                  size={30}
                />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Settings
                </h2>
              </div>
            </div>
            <button className="bg-green-500 text-white py-2 px-4 rounded-xl w-full mt-4 hover:bg-green-600">
              Configure Settings
            </button>
          </div>

          {/* Manage Users Section */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users
                  className="text-gray-500 dark:text-gray-400 mr-3"
                  size={30}
                />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Manage Users
                </h2>
              </div>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-xl w-full mt-4 hover:bg-blue-600">
              View & Manage Users
            </button>
          </div>

          {/* Reports Management Section */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FileText
                  className="text-gray-500 dark:text-gray-400 mr-3"
                  size={30}
                />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Manage Reports
                </h2>
              </div>
            </div>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-xl w-full mt-4 hover:bg-yellow-600">
              View & Manage Reports
            </button>
          </div>
        </div>

        {/* Manage Requests Section */}
        <AdminGroupChurchRequest />
      </div>
    </DashboardLayout>
  );
};

export default Admin;
