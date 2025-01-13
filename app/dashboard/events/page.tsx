"use client";
import DashboardLayout from "@/components/layout/dashboard-layout";
import React, { useState } from "react";
import EventList from "@/components/EventList";
import Calender from "@/components/Calender";
import AvailableGroups from "@/components/AvailableGroups";
import CreatePrayerGroupModal from "@/components/CreatePrayerGroupModal";
import CreatePrayerMeeting from "@/components/CreatePrayerMeetingModal";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { useAuthContext } from "@/providers/authProvider";

export default function EventsPage() {
  const { user } = useAuthContext();
  const [events, setEvents] = useState([
    { id: 1, name: "Prayer Meeting 1", date: "2025-01-05" },
    { id: 2, name: "Prayer Meeting 2", date: "2025-01-12" },
    { id: 3, name: "Prayer Meeting 3", date: "2025-01-19" },
  ]);

  // Example group data, you can replace this with data from your database
  const groups = [
    { id: 1, name: "Prayer Group A", logo_url: "/images/group-a-logo.png" },
    { id: 2, name: "Prayer Group B", logo_url: "/images/group-b-logo.png" },
    // Add more groups as necessary
  ];

  return (
    <DashboardLayout>
      <div className="p-6 space-y-8">
        <h1 className="text-2xl font-bold sm:text-3xl dark:text-white">
          Prayer Events
        </h1>

        {/* Main Grid Layout - Mobile Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Events */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2 space-y-8">
            {/* Upcoming Events Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Upcoming Events
              </h2>
              <EventList events={events} />
            </div>
          </div>

          {/* Right Column - Available Groups and Buttons */}
          <div className="space-y-4">
            {/* Create Prayer Group Modal Button */}
            <div className="flex flex-wrap gap-4 items-center">
              {(user?.role === "group_admin" && user?.is_prayer_group_admin) ||
              user?.role === "superuser" ? (
                <>
                  <CreatePrayerGroupModal /> {/* No need to pass onSubmit */}
                  <Link href="/dashboard/create_prayer_meeting">
                    <button className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 rounded-xl flex items-center space-x-2">
                      <PlusCircle className="w-5 h-5" /> {/* Add the icon */}
                      <span>Create Prayer Meeting</span>
                    </button>
                  </Link>
                </>
              ) : null}
            </div>

            {/* Available Groups Section */}
            <AvailableGroups groups={groups} />
          </div>

          {/* Calendar Section - Span Both Columns on Mobile */}
          <div className="hidden lg:block col-span-1 sm:col-span-1 md:col-span-3">
            <Calender />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
