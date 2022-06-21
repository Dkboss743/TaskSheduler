import React from "react";
import styles from "./CalendarHead.module.css";
import Blocks from "../events/Blocks/Blocks";
let date = 10;
const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// const blocks = (
//   <ul className={styles.blockMain}>
//     {daysOfTheWeek.map((day) => {
//       return <li className={styles.blocks}></li>;
//     })}
//   </ul>
// );
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
