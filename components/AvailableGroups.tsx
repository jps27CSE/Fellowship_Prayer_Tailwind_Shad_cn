import { Eye, UserPlus } from "lucide-react"; // Importing icons for actions

const groups = [
  // Sample groups data
  {
    id: 1,
    name: "Prayer Group A",
    logo_url: "/path/to/logo.jpg", // Sample logo URL
    category: "Weekly", // Example category
  },
  {
    id: 2,
    name: "Prayer Group B",
    logo_url: "/path/to/logo.jpg", // Sample logo URL
    category: "Special Event", // Example category
  },
  // Add more groups as needed
];

const AvailableGroups = () => (
  <div className="mt-6">
    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white ">
      Available Groups
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Map through the groups */}
      {groups.map((group) => (
        <div
          key={group.id}
          className="bg-white dark:bg-gray-900 p-4 shadow-md rounded-md flex flex-col items-center hover:shadow-xl transition-shadow duration-300 ease-in-out dark:text-white"
        >
          {/* Group Logo */}
          <img
            src={group.logo_url}
            alt={`${group.name} logo`}
            className="w-24 h-24 object-cover mb-4 rounded-full border-2 border-gray-300 dark:border-gray-600"
          />

          {/* Group Name */}
          <p className="text-lg font-semibold">{group.name}</p>

          {/* Group Category */}
          <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
            {group.category}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default AvailableGroups;
