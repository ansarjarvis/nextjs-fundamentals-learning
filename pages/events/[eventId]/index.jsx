import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import EventSummary from "@/components/event-detail/event-summary";
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";

const EventDetailPage = () => {
  let router = useRouter();
  let eventId = router.query.eventId;
  let event = getEventById(eventId);
  if (!event) {
    return <p>something went wrong</p>;
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};
export default EventDetailPage;
