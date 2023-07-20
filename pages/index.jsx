import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/EventSearch";

let HomePage = () => {
  let featuredEvents = getFeaturedEvents();
  return (
    <>
      <EventList items={featuredEvents} />
    </>
  );
};
export default HomePage;
