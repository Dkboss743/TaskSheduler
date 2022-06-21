import React from "react";
import { useContext } from "react";
import TaskContext from "../../../store/tasks-content";
import styles from "./Blocks.module.css";
import NewTask from "./NewTask/NewTask";
const list = new Array(35).fill(0);

const times = ["09:30AM", "10:30AM", "11:30AM", "12:30PM"];
const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const days = { Sun: 1, Mon: 2, Tue: 3, Wed: 4, Thu: 5, Fri: 6, Sat: 7 };

const Blocks = () => {
  const taskCtx = useContext(TaskContext);
  const textList = new Array(35).fill(0);
  daysOfTheWeek.forEach((day) => {
    taskCtx.tasks[day].forEach((ele) => {
      textList[(ele.id - 1) * 7 + days[day] - 1] = (
        <NewTask title={ele.task} id={ele.id}></NewTask>
      );
    });
  });

  let time = 0;
  return (
    <ul className={styles.blockMain}>
      {list.map((ele, i) => {
        if (i % 7 === 0) {
          return (
            <React.Fragment>
              <li key={i} className={styles.blocks}>
                {textList[i] !== 0 ? textList[i] : ""}
                <p className={styles.time}>{times[time++]}</p>
              </li>
            </React.Fragment>
          );
        } else {
          return (
            <li key={i} className={styles.blocks}>
              {textList[i] !== 0 ? textList[i] : ""}
            </li>
          );
        }
      })}
    </ul>
  );
};
export default Blocks;
