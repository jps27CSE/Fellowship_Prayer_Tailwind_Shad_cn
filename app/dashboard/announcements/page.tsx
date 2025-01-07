import React from 'react'
import { Bell, Calendar } from 'lucide-react'
import DashboardLayout from "@/components/layout/dashboard-layout";

const Announcements = () => {
    const announcements = [
        {
            id: 1,
            title: "New Church Renovations",
            date: "January 10, 2025",
            content:
                "We are excited to announce that church renovations will begin next week. Stay tuned for updates!",
        },
        {
            id: 2,
            title: "Community Prayer Event",
            date: "January 15, 2025",
            content:
                "Join us for a community prayer event next Sunday! Everyone is welcome.",
        },
    ];

    return (
        <DashboardLayout>
        <div className="p-6 dark:text-white">
            <h1 className="text-2xl font-bold sm:text-3xl mb-4">Announcements</h1>

            {/* Create Announcement Button */}
            <button className="flex items-center rounded-xl bg-blue-500 text-white px-4 py-2 mb-4 hover:bg-blue-600">
                <Bell className="w-5 h-5 mr-2" />
                <span>Create New Announcement</span>
            </button>

            {/* Announcements List */}
            <div className="space-y-4">
                {announcements.map((announcement) => (
                    <div
                        key={announcement.id}
                        className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
                    >
                        {/* Announcement Header */}
                        <div className="flex items-center space-x-3 mb-3">
                            <Calendar className="w-6 h-6 text-blue-500" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    {announcement.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {announcement.date}
                                </p>
                            </div>
                        </div>

                        {/* Announcement Content */}
                        <p className="text-gray-600 dark:text-gray-300">{announcement.content}</p>
                    </div>
                ))}
            </div>
        </div>
        </DashboardLayout>
    );
};

export default Announcements;
