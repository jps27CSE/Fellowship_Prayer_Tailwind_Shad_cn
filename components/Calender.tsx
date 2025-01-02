import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarComponent = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Prayer Meeting 1",
      start: new Date(2025, 0, 5, 10, 0), // January 5th, 2025 at 10:00 AM
      end: new Date(2025, 0, 5, 12, 0), // January 5th, 2025 at 12:00 PM
    },
    {
      id: 2,
      title: "Prayer Meeting 2",
      start: new Date(2025, 0, 12, 10, 0), // January 12th, 2025 at 10:00 AM
      end: new Date(2025, 0, 12, 12, 0), // January 12th, 2025 at 12:00 PM
    },
    {
      id: 3,
      title: "Prayer Meeting 3",
      start: new Date(2025, 0, 19, 10, 0), // January 19th, 2025 at 10:00 AM
      end: new Date(2025, 0, 19, 12, 0), // January 19th, 2025 at 12:00 PM
    },
  ]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Calendar</h2>
      <div className="bg-white shadow-lg rounded-lg p-4">
        <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
