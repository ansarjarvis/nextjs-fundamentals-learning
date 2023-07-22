import classes from "./event-item.module.css";
import Button from "../ui/Button";
import { AddressIcon } from "../icons/AddressIcon";
import { DateIcon } from "../icons/DateIcon";
import { ArrowIcon } from "../icons/ArrowIcon";
import Image from "next/image";

const EventItem = (props) => {
  let { title, image, date, location, id } = props;
  let humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  let formattedAddress = location.replace(", ", "\n");
  let exploreLink = `/events/${id}`;
  return (
    <>
      <li className={classes.item}>
        <Image src={"/" + image} alt={title} height={160} width={250} />
        <div className={classes.content}>
          <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}>
              <DateIcon />
              <time>{humanReadableDate}</time>
            </div>
            <div className={classes.address}>
              <AddressIcon />
              <address>{formattedAddress}</address>
            </div>
          </div>
          <div className={classes.actions}>
            <Button link={exploreLink}>
              <span>Explore Event</span>
              <span className={classes.icon}>
                <ArrowIcon />
              </span>
            </Button>
          </div>
        </div>
      </li>
    </>
  );
};
export default EventItem;
