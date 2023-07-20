import { useRouter } from "next/router";
import { getFilteredEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";

const FilterEventsPage = () => {
  let router = useRouter();
  let filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading....</p>;
  }
  let filteredYear = filterData[0];
  let filteredMonth = filterData[1];

  let numYear = +filteredYear;
  let numMonth = +filteredMonth;
  let events = getFilteredEvents({ year: numYear, month: numMonth });

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
export default FilterEventsPage;
