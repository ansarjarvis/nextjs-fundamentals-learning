import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../helpers/api-utils";
import EventList from "@/components/events/EventList";

const FilterEventsPage = (props) => {
  let { events } = props;
  // let router = useRouter();
  // let filterData = router.query.slug;
  // if (!filterData) {
  //   return <p className="center">Loading....</p>;
  // }
  // let filteredYear = filterData[0];
  // let filteredMonth = filterData[1];

  // let numYear = +filteredYear;
  // let numMonth = +filteredMonth;
  // let events = getFilteredEvents({ year: numYear, month: numMonth });

  if (!events || events.length === 0) {
    return (
      <>
        <p>No events found for the choosen filter</p>
      </>
    );
  }
  return (
    <>
      <EventList items={events} />
    </>
  );
};

export let getServerSideProps = async (context) => {
  let { params } = context;

  let filterData = params.slug;
  let filteredYear = filterData[0];
  let filteredMonth = filterData[1];

  let numYear = +filteredYear;
  let numMonth = +filteredMonth;
  let events = await getFilteredEvents({ year: numYear, month: numMonth });

  return {
    props: {
      events: events,
    },
  };
};

export default FilterEventsPage;
