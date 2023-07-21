import { getEventById, getFeaturedEvents } from "../../../helpers/api-utils";
import EventSummary from "@/components/event-detail/event-summary";
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";

const EventDetailPage = (props) => {
  let { event } = props;
  // let router = useRouter();
  // let eventId = router.query.eventId;
  // let event = getEventById(eventId);
  if (!event) {
    return (
      <div className="center">
        <p>loading...</p>
      </div>
    );
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

export let getStaticProps = async (context) => {
  let id = context.params.eventId;
  let foundEvent = await getEventById(id);
  return {
    props: {
      event: foundEvent,
    },
    revalidate: 30,
  };
};

export let getStaticPaths = async () => {
  let events = await getFeaturedEvents();
  let paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: true,
  };
};

export default EventDetailPage;
