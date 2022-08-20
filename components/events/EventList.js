import React from "react";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";

export default function EventList(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((e) => (
        <EventItem
          key={e.id}
          id={e.id}
          title={e.title}
          location={e.location}
          date={e.date}
          image={e.image}
        />
      ))}
    </ul>
  );
}
