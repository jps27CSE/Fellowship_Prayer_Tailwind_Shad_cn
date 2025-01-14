import { useEffect, useState } from "react";
import EventCard from "@/components/EventCard";
import { Event } from "@/types/eventCard";
import { supabase } from "@/lib/supabase";
const EventList = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase.from("meetings").select("*");

        if (error) throw error;
        setEvents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} /> // Map over events and pass them as props to EventCard
      ))}
    </div>
  );
};

export default EventList;
