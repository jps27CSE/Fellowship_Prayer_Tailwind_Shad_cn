import React from "react";
import { Calendar, Heart } from "lucide-react";

const Events = () => {
  return (
    <div className="my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Upcoming Events */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex items-center space-x-4">
          <div className="text-blue-500">
            <Calendar size={32} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Next Prayer Events
            </h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>Prayer Meeting - January 10, 2025</li>
              <li>Group Bible Study - January 15, 2025</li>
            </ul>
          </div>
        </div>

        {/* Prayer Wall */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex items-center space-x-4">
          <div className="text-red-500">
            <Heart size={32} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Prayer Wall
            </h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>Prayer for Health - [Requester Name]</li>
              <li>Prayer for Family - [Requester Name]</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
