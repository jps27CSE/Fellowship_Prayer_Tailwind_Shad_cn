import React from "react";
import { Calendar, Heart } from "lucide-react";

const Events = () => {
  return (
      <div className="my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Upcoming Events */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex flex-col items-center space-y-4">
            <div className="text-blue-500 mb-2">
              <Calendar size={32} />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Next Prayer Events
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>Prayer Meeting - January 10, 2025</li>
                <li>Group Bible Study - January 15, 2025</li>
              </ul>
            </div>
          </div>

          {/* Prayer Wall */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex flex-col items-center space-y-4">
            <div className="text-red-500 mb-2">
              <Heart size={32} />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Prayer Wall
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
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
