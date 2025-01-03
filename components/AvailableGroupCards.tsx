import prayerLogo from "../public/prayer_logo.png";
import Image from "next/image";
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
      <div className="flex-1 pl-4">
        {/* Group Name */}
        <p className="text-xl font-semibold mb-1">{group.name}</p>

        {/* Group Category */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {group.category}
        </p>
      </div>
    </div>
  );
};

export default AvailableGroupCards;
