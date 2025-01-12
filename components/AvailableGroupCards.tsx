import Image from "next/image";
import { Calendar, Users, User } from "lucide-react";
import { AvailablePrayerGroup } from "@/types/prayer_groups";

interface GroupCardProps {
  group: AvailablePrayerGroup;
}

const AvailableGroupCards = ({ group }: GroupCardProps) => {
  return (
    <div
      key={group.id}
      className="bg-white dark:bg-gray-700 rounded-xl shadow-md flex hover:shadow-xl transition-shadow duration-300 ease-in-out dark:text-white"
    >
      {/* Group Logo (Left side) */}
      <div className="w-1/4 h-full overflow-hidden rounded-xl">
        <Image
          src={group.logo_url}
          width={100}
          height={100}
          alt={`${group.name} logo`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Group Info (Right side) */}
      <div className="flex-1 pl-4 py-4">
        {/* Group Name with Icon */}
        <div className="flex items-center space-x-2 mb-1">
          <Users size={20} className="text-gray-800 dark:text-white" />
          <p className="text-xl font-semibold">{group.name}</p>
        </div>

        {/* Group Admin Name with Icon */}
        <div className="flex items-center space-x-2 mb-1">
          <User size={20} className="text-gray-500 dark:text-gray-400" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Admin: {group.admin_name}
          </p>
        </div>

        {/* Group Category with Icon */}
        <div className="flex items-center space-x-2 mb-1">
          <Calendar size={16} className="text-gray-500 dark:text-gray-400" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {group.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvailableGroupCards;
