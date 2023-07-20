import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";

let HomePage = () => {
  let featuredEvents = getFeaturedEvents();
  return (
    <>
      <EventList items={featuredEvents} />
    </>
  );
};
export default HomePage;
