"use client";
import { useState, useEffect } from "react";
import Image from "next/image"; // For optimized image handling

type FeedItem = {
    id: number;
    type: "Prayer Request" | "Event" | "Announcement";
    profilePic: string | null; // Profile picture URL (nullable)
    name: string; // User or church name
    date: string; // Post date
    content: string; // Post content
};

const NewsFeed = () => {
    const [feedItems, setFeedItems] = useState<FeedItem[]>([]);

    useEffect(() => {
        // Mock fetching data
        const fetchData = async () => {
            const mockFeed: FeedItem[] = [
                {
                    id: 1,
                    type: "Prayer Request",
                    profilePic: "/images/user1.jpg", // Replace with valid URL or path
                    name: "John Doe",
                    date: "January 5, 2025",
                    content: "Please pray for my health and recovery.",
                },
                {
                    id: 2,
                    type: "Event",
                    profilePic: "/images/church1.jpg", // Replace with valid URL or path
                    name: "Grace Church",
                    date: "January 7, 2025",
                    content: "Join us for a community prayer meeting this Sunday.",
                },
                {
                    id: 3,
                    type: "Announcement",
                    profilePic: null, // Simulating missing profile picture
                    name: "Church Admin",
                    date: "January 3, 2025",
                    content: "Church renovations will begin next week. Stay tuned for updates.",
                },
            ];
            setFeedItems(mockFeed);
        };

        fetchData();
    }, []);

    return (
        <div className="my-6">
            {feedItems.map((item) => (
                <div
                    key={item.id}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md mb-4"
                >
                    {/* Header: Profile Picture, Name, and Date */}
                    <div className="flex items-center space-x-4 mb-4">
                        {item.profilePic ? (
                            <Image
                                src={item.profilePic}
                                alt={`${item.name} profile`}
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        ) : (
                            <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                                {/* Default placeholder */}
                                {item.name.charAt(0).toUpperCase()}
                            </div>
                        )}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                {item.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                        </div>
                    </div>

                    {/* Content */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.content}</p>
                </div>
            ))}
        </div>
    );
};

export default NewsFeed;
