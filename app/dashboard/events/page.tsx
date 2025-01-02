"use client";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { useState } from "react";
import EventList from "@/components/EventList";
import Calender from "@/components/Calender";
import AvailableGroups from "@/components/AvailableGroups";
import CreatePrayerGroupModal from "@/components/CreatePrayerGroupModal";

export default function EventsPage() {
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
      <div className="p-6 space-y-8 ">
        <h1 className="text-2xl font-bold sm:text-3xl dark:text-white">
          Events
        </h1>

        {/* Create Prayer Group Modal Button */}
        <div className="flex flex-wrap gap-4 items-center">
          <CreatePrayerGroupModal onSubmit={"addMeeting"} />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ">
            Create Prayer Meeting
          </button>
        </div>

        {/* Available Groups Section */}
        <AvailableGroups />

        {/* Upcoming Events Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
            Upcoming Events
          </h2>
          <EventList events={events} />
        </div>

        {/* Calendar Section */}
        <div className="mt-6">
          <Calender />
        </div>
      </div>
    </DashboardLayout>
  );
}
