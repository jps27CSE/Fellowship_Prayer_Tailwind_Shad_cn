import EventCard from "@/components/EventCard";

const EventList = ({ events }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map(event => (
            <EventCard key={event.id} event={event} />
        ))}
    </div>
);
export default EventList;