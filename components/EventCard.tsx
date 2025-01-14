import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Mic,
  Music,
  User,
  Speaker,
} from "lucide-react";
import eventImage from "../public/prayer_meeting_logo.jpg"; // Placeholder image

// Define types for event props
interface EventProps {
  event: {
    id: string;
    name: string;
    description: string;
    date: string;
    time: string;
    location: string;
    speaker: string;
    worshipers: string[];
    special_song: string;
    moderator: string;
  };
}

const EventCard = ({ event }: EventProps) => (
  <div className="bg-white dark:bg-gray-700 shadow-lg rounded-xl flex flex-col hover:shadow-xl transition-shadow duration-300 ease-in-out w-1/2">
    {/* Event Name */}
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 p-4">
      {event.meeting_name}
    </h3>

    {/* Event Description */}
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 px-4">
      {event.description}
    </p>

    {/* Event Image (Below description) */}
    <div className="w-full h-64 overflow-hidden rounded-xl mb-4">
      <Image
        src={event.banner_image_url}
        width={500}
        height={500}
        alt={`${event.name} image`}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Event Date and Time */}
    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4 px-4">
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
    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4 px-4">
      <MapPin size={18} className="text-gray-600 dark:text-gray-400" />
      <p>{event.location}</p>
    </div>

    {/* Roles and Worshipers */}
    <div className="px-4">
      {/* Speaker */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
        <Mic size={18} className="text-gray-600 dark:text-gray-400" />
        <p>
          Speaker: <span className="font-medium">{event.speaker}</span>
        </p>
      </div>

      {/* Worshipers */}
      {event.worshipers && event.worshipers.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Worshipers:
          </h4>
          {event.worshipers.map((worshiper, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-1"
            >
              <User size={18} className="text-gray-600 dark:text-gray-400" />
              <p>{worshiper}</p>
            </div>
          ))}
        </div>
      )}

      {/* Special Song */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
        <Music size={18} className="text-gray-600 dark:text-gray-400" />
        <p>
          Special Song:{" "}
          <span className="font-medium">{event.special_song}</span>
        </p>
      </div>

      {/* Moderator */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
        <Speaker size={18} className="text-gray-600 dark:text-gray-400" />
        <p>
          Moderator: <span className="font-medium">{event.moderator}</span>
        </p>
      </div>
    </div>
  </div>
);

export default EventCard;
