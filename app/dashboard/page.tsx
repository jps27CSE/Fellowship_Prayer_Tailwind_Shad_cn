"use client";
import DashboardLayout from "@/components/layout/dashboard-layout";
import GreetingCard from "@/components/widgets/greetings";
import Link from "next/link";
import QuickStats from "@/components/widgets/quickStats";
import Events from "@/components/widgets/events";
import NewsFeed from "@/components/Newsfeed";
import QuickActions from "@/components/widgets/quickActions";

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
          <QuickActions />
        </div>
      </div>
    </DashboardLayout>
  );
}
