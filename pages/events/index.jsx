import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/EventSearch";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const EventsPage = () => {
  let allEvents = getAllEvents();
  let router = useRouter();

  let onSearchHandler = (year, month) => {
    let fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventSearch onSearch={onSearchHandler} />
      <EventList items={allEvents} />;
    </div>
  );
};
export default EventsPage;
