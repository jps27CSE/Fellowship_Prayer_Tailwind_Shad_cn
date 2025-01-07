import prayerLogo from "../public/prayer_logo.png";
import Image from "next/image";
import {Calendar, Users} from "lucide-react";
const AvailableGroupCards = ({ group }) => {
  return (
    <div
      key={group.id}
      className="bg-white dark:bg-gray-700 rounded-xl  shadow-md rounded-md flex hover:shadow-xl transition-shadow duration-300 ease-in-out dark:text-white"
    >
      {/* Group Logo (Left side) */}
      <div className="w-1/4 h-full overflow-hidden rounded-xl">
        <Image
          src={prayerLogo}
          alt={`${group.name} logo`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Group Info (Right side) */}
      {/* Group Info (Right side) */}
      <div className="flex-1 pl-4 py-4">
        {/* Group Name with Icon */}
        <div className="flex items-center space-x-2 mb-1">
          <Users size={20} className="text-gray-800 dark:text-white" />
          <p className="text-xl font-semibold">{group.name}</p>
        </div>

        {/* Group Category with Icon */}
        <div className="flex items-center space-x-2">
          <Calendar size={16} className="text-gray-500 dark:text-gray-400" />
          <p className="text-sm text-gray-500 dark:text-gray-400">{group.category}</p>
        </div>
      </div>
    </div>
  );
};

export default AvailableGroupCards;
