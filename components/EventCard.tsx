import { Calendar, Clock, MapPin } from "lucide-react"; // Import additional icons

const EventCard = ({ event }) => (
  <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      {event.name}
    </h3>

    {/* Event Date and Time */}
    <div className="flex items-center space-x-2 mt-2">
      <Calendar size={16} className="text-gray-600 dark:text-gray-400" />
      <p className="text-gray-600 dark:text-gray-400">Date: {event.date}</p>
    </div>

    {/* Event Time */}
    <div className="flex items-center space-x-2 mt-2">
      <Clock size={16} className="text-gray-600 dark:text-gray-400" />
      <p className="text-gray-600 dark:text-gray-400">
        Time: 8:00 PM {event.time}
      </p>{" "}
      {/* Assuming time is a property in the event */}
    </div>

    {/* Event Location (if available) */}
    {event.location && (
      <div className="flex items-center space-x-2 mt-2">
        <MapPin size={16} className="text-gray-600 dark:text-gray-400" />
        <p className="text-gray-600 dark:text-gray-400">
          Location: {event.location}
        </p>
      </div>
    )}
  </div>
);

export default EventCard;
