import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/EventSearch";
import { getAllEvents } from "../../helpers/api-utils";
import { useRouter } from "next/router";

const EventsPage = (props) => {
  let router = useRouter();
  let { events } = props;

  let onSearchHandler = (year, month) => {
    let fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventSearch onSearch={onSearchHandler} />
      <EventList items={events} />;
    </div>
  );
};

export let getStaticProps = async (context) => {
  let allEvents = await getAllEvents();
  return {
    props: {
      events: allEvents,
    },
    revalidate: 60,
  };
};
export default EventsPage;
