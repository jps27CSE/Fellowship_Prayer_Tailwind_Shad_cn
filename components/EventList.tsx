import EventCard from "@/components/EventCard";

const EventList = ({ events }) => (
    <div className="space-y-4">
        {events.map(event => (
            <EventCard key={event.id} event={event} />
        ))}
    </div>
);

export default EventList;
