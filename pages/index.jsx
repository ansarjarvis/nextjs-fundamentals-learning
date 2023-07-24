import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-utils";
import NewsletterRegistration from "@/components/inputs/newsletter-registration";

let HomePage = (props) => {
  return (
    <>
      <NewsletterRegistration />
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
