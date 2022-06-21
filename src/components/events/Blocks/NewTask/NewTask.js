import React from "react";
import styles from "./NewTask.module.css";
const time = [
  "08:30-09:30 AM",
  "09:30-10:30 AM",
  "10:30-11:30 AM",
  "11:30-12:30 PM",
];
const randomColor = () => {
  const color = ["#ded7e5", "#d7e9d7", "#e9d6ae"];
  const random = Math.floor(Math.random() * 2 + 1);
  return color[random];
};
const NewTask = (props) => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: randomColor() }} className={styles.task}>
        <h3 className={styles.taskHead}>{props.title}</h3>
        <p className={styles.taskTime}>{time[props.id]}</p>
      </div>
    </React.Fragment>
  );
};
export default NewTask;
