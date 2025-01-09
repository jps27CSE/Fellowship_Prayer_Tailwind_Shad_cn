"use client";
import DashboardLayout from "@/components/layout/dashboard-layout";
import GreetingCard from "@/components/widgets/greetings";
import Link from "next/link";
import QuickStats from "@/components/widgets/quickStats";
import Events from "@/components/widgets/events";
import NewsFeed from "@/components/Newsfeed";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Left Column: NewsFeed */}
        <div className="md:col-span-2 lg:col-span-2">
          {/* Greeting Section */}
          <GreetingCard />
          {/* NewsFeed */}
          <NewsFeed />
        </div>

        {/* Right Column: Widgets */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <QuickStats />
          {/* Events */}
          <Events />
          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-4">
              <Link
                href="/dashboard/meetings/create"
                className="bg-blue-500 text-white py-2 px-4 rounded block text-center"
              >
                Create Meeting
              </Link>
              <Link
                href="/dashboard/requests/create"
                className="bg-green-500 text-white py-2 px-4 rounded block text-center"
              >
                Submit Prayer Request
              </Link>
              <Link
                href="/dashboard/notices/create"
                className="bg-yellow-500 text-white py-2 px-4 rounded block text-center"
              >
                Post Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
