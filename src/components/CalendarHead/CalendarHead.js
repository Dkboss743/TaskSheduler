import React from "react";
import styles from "./CalendarHead.module.css";
import Blocks from "../events/Blocks/Blocks";
import Form from "../form/Form";
let date = 10;
const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const weekdayHead = (
  <ul className={styles.weekdayHead}>
    {daysOfTheWeek.map((day) => {
      return (
        <li key={date}>
          <p>{day}</p>
          <p> {date++}</p>
        </li>
      );
    })}
  </ul>
);

const CalendarHead = (props) => {
  return (
    <React.Fragment>
      {weekdayHead} <Blocks></Blocks>
    </React.Fragment>
  );
};
export default CalendarHead;
