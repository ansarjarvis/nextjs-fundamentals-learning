import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-utils";

let HomePage = (props) => {
  return (
    <>
      <EventList items={props.events} />
    </>
  );
};

export let getStaticProps = async (context) => {
  let featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
};
export default HomePage;
