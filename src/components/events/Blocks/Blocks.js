import React from "react";
import styles from "./Blocks.module.css";
const list = new Array(35).fill(0);
const times = ["09:30AM", "10:30AM", "11:30AM", "12:30PM"];

const Blocks = () => {
  let time = 0;
  return (
    <ul className={styles.blockMain}>
      {list.map((ele, i) => {
        if (i % 7 === 0) {
          return (
            <React.Fragment>
              <li className={styles.blocks}>
                <p className={styles.time}>{times[time++]}</p>
              </li>
            </React.Fragment>
          );
        }
        return <li className={styles.blocks}></li>;
      })}
    </ul>
  );
};
export default Blocks;
