export async function getAllEvents() {
  let response = await fetch(
    "https://nextjs-learning-demo-default-rtdb.firebaseio.com/events.json"
  );
  let data = await response.json();

  let events = [];

  for (let key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  let allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  let allEvents = await getAllEvents();

  return allEvents.find((event) => event.id === id);
}
