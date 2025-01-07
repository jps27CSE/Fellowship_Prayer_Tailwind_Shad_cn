import Image from "next/image";
import { Calendar, Clock, MapPin, Mic, Music, User, Speaker } from "lucide-react";
import eventImage from "../public/prayer_meeting_logo.jpg"; // Placeholder image

const EventCard = ({ event }) => (
    <div className="bg-white dark:bg-gray-700 shadow-lg rounded-xl flex hover:shadow-xl transition-shadow duration-300 ease-in-out">
        {/* Event Image (Left side) */}
        <div className="w-1/4 h-full overflow-hidden rounded-xl">
            <Image
                src={eventImage} // Replace with `event.image` if dynamic images are used
                alt={`${event.name} image`}
                className="w-full h-full object-cover"
            />
        </div>

        {/* Event Details (Right side) */}
        <div className="flex-1 p-4">
            {/* Event Name */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {event.name}
            </h3>

            {/* Event Date and Time */}
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <div className="flex items-center space-x-2">
                    <Calendar size={18} className="text-gray-600 dark:text-gray-400" />
                    <p>{event.date}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Clock size={18} className="text-gray-600 dark:text-gray-400" />
                    <p>{event.time}</p>
                </div>
            </div>

            {/* Event Location */}

                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <MapPin size={18} className="text-gray-600 dark:text-gray-400" />
                    <p>{event.location}</p>
                </div>


            {/* Additional Event Details in two columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Speaker */}

                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Mic size={18} className="text-gray-600 dark:text-gray-400" />
                        <p>Speaker: <span className="font-medium">{event.speaker}</span></p>
                    </div>


                {/* Worshiper */}

                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <User size={18} className="text-gray-600 dark:text-gray-400" />
                        <p>Worshiper: <span className="font-medium">{event.worshiper}</span></p>
                    </div>


                {/* Special Song */}

                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Music size={18} className="text-gray-600 dark:text-gray-400" />
                        <p>Special Song: <span className="font-medium">{event.special_song}</span></p>
                    </div>

                {/* Moderator */}

                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Speaker size={18} className="text-gray-600 dark:text-gray-400" />
                        <p>Moderator: <span className="font-medium">{event.moderator}</span></p>
                    </div>

            </div>
        </div>
    </div>
);

export default EventCard;
