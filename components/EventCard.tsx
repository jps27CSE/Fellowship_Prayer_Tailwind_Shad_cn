import { Calendar, Clock, Mic, Music, Speaker, User } from "lucide-react";
import Image from "next/image";

interface EventProps {
  event: {
    meeting_name: string;
    description: string;
    scheduled_time: string;
    banner_image_url: string;
    speaker_user: string | null;
    worshiper_user: string | null;
    special_song_user: string | null;
    moderator_user: string | null;
  };
}
const EventCard = ({ event }: EventProps) => {
  // Format the scheduled_time
  const formattedDate = new Date(event.scheduled_time).toLocaleDateString(
    undefined,
    { weekday: "long", year: "numeric", month: "long", day: "numeric" },
  );
  const formattedTime = new Date(event.scheduled_time).toLocaleTimeString(
    undefined,
    { hour: "2-digit", minute: "2-digit" },
  );

  return (
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
          alt={`${event.banner_image_url} image`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Event Date and Time */}
      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4 px-4">
        <div className="flex items-center space-x-2">
          <Calendar size={18} className="text-gray-600 dark:text-gray-400" />
          <p>{formattedDate}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Clock size={18} className="text-gray-600 dark:text-gray-400" />
          <p>{formattedTime}</p>
        </div>
      </div>

      {/* Roles and Worshipers */}
      <div className="px-4">
        {/* Speaker */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
          <Mic size={18} className="text-gray-600 dark:text-gray-400" />
          <p>
            Speaker:{" "}
            <span className="font-medium">
              {event.speaker_user ? event.speaker_user : "N/A"}
            </span>
          </p>
        </div>

        {/* Worshipers */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
          <User size={18} className="text-gray-600 dark:text-gray-400" />
          <p>
            Worshiper:{" "}
            <span className="font-medium">
              {event.worshiper_user ? event.worshiper_user : "N/A"}
            </span>
          </p>
        </div>

        {/* Special Song */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
          <Music size={18} className="text-gray-600 dark:text-gray-400" />
          <p>
            Special Song:{" "}
            <span className="font-medium">
              {event.special_song_user ? event.special_song_user : "N/A"}
            </span>
          </p>
        </div>

        {/* Moderator */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
          <Speaker size={18} className="text-gray-600 dark:text-gray-400" />
          <p>
            Moderator:{" "}
            <span className="font-medium">
              {event.moderator_user ? event.moderator_user : "N/A"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
