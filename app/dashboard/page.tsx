"use client";
import DashboardLayout from "@/components/layout/dashboard-layout";
import EventsWidget from "@/components/widgets/events";
import PrivateRoute from "@/providers/privateRoutes";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EventsWidget />
        {/* Add other widgets here */}
      </div>
    </DashboardLayout>
  );
}
