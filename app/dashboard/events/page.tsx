'use client'
import DashboardLayout from '@/components/layout/dashboard-layout';
import { useState } from 'react';

export default function EventsPage() {
    const [events, setEvents] = useState([
        { id: 1, name: 'Prayer Meeting 1', date: '2025-01-05' },
        { id: 2, name: 'Prayer Meeting 2', date: '2025-01-12' },
        { id: 3, name: 'Prayer Meeting 3', date: '2025-01-19' },
        // Add more events as needed
    ]);

    return (
        <DashboardLayout>
            <div className="p-6">
                <h1 className="text-2xl font-bold">Events</h1>
                <p>Here you can manage and view events.</p>

                {/* Create Prayer Meeting Button */}
                <div className="mt-6">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                        Create Prayer Meeting
                    </button>
                </div>

                {/* Upcoming Events */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {events.map(event => (
                            <div
                                key={event.id}
                                className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between"
                            >
                                <h3 className="text-lg font-semibold">{event.name}</h3>
                                <p className="text-gray-600">Date: {event.date}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* React Big Calendar */}
                <div className="mt-12">
                    <h2 className="text-xl font-semibold mb-4">Calendar</h2>
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        {/* React Big Calendar goes here */}
                        {/* Replace this with your actual calendar component */}
                        <div className="h-80 bg-gray-200 flex items-center justify-center text-gray-500">
                            Calendar (React Big Calendar Component Here)
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
