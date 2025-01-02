import AvailableGroupCards from "@/components/AvailableGroupCards";

const groups = [
  // Sample groups data
  {
    id: 1,
    name: "Prayer Group A",
    logo_url: "./public/prayer_logo.png", // Sample logo URL
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
        <AvailableGroupCards group={group} key={group.id} />
      ))}
    </div>
  </div>
);

export default AvailableGroups;
