"use client";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import GreetingCard from "@/components/widgets/greetings";
import { getFromLocalStorage } from "@/lib/localStorage";
import { Calendar, MessageSquare, Bell, Heart } from "lucide-react"; // Import Lucide icons
import Link from "next/link";
import QuickStats from "@/components/widgets/quickStats";
import { Event } from "@firebase/webchannel-wrapper";
import Events from "@/components/widgets/events";

export default function DashboardPage() {
  const router = useRouter();
  const token = getFromLocalStorage("userId");

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token]);

  return (
    <DashboardLayout>
      <div className="container mx-auto">
        {/* Greeting Section */}
        <GreetingCard />

        {/* Quick Stats */}
        <QuickStats />

        {/* Widgets */}
        <Events />
        {/* Quick Actions */}
        <div className="mt-6 flex space-x-4">
          <Link
            href="/dashboard/meetings/create"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Create Meeting
          </Link>
          <Link
            href="/dashboard/requests/create"
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Submit Prayer Request
          </Link>
          <Link
            href="/dashboard/notices/create"
            className="bg-yellow-500 text-white py-2 px-4 rounded"
          >
            Post Notice
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
