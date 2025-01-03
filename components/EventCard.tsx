import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import eventImage from "../public/prayer_meeting_logo.jpg"; // Placeholder image

const EventCard = ({ event }) => (
  <div className="bg-white dark:bg-gray-700 shadow-lg rounded-xl flex hover:shadow-xl transition-shadow duration-300 ease-in-out">
    {/* Event Image (Left side) */}
    <div className="w-1/4 h-full overflow-hidden rounded-xl ">
      <Image
        src={eventImage} // Replace with `event.image` if dynamic images are used
        alt={`${event.name} image`}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Event Details (Right side) */}
    <div className="flex-1 p-4">
      {/* Event Name */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {event.name}
      </h3>

      {/* Event Date */}
      <div className="flex items-center space-x-2 mt-2">
        <Calendar size={16} className="text-gray-600 dark:text-gray-400" />
        <p className="text-gray-600 dark:text-gray-400">Date: {event.date}</p>
      </div>

      {/* Event Time */}
      <div className="flex items-center space-x-2 mt-2">
        <Clock size={16} className="text-gray-600 dark:text-gray-400" />
        <p className="text-gray-600 dark:text-gray-400">Time: {event.time}</p>
      </div>

      {/* Event Location */}
      {event.location && (
        <div className="flex items-center space-x-2 mt-2">
          <MapPin size={16} className="text-gray-600 dark:text-gray-400" />
          <p className="text-gray-600 dark:text-gray-400">
            Location: {event.location}
          </p>
        </div>
      )}
    </div>
  </div>
);

export default EventCard;
