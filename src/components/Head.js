import styles from "./Head.module.css";
import calendar from "../resources/icons/calendar.svg";
import down from "../resources/icons/down.svg";
import left from "../resources/icons/left.svg";
import right from "../resources/icons/right.svg";

const head = () => {
  return (
    <div className={styles["main-head"]}>
      <h1>Timeline</h1>
      <div className={styles.mainWeek}>
        <div className={styles.week}>
          <img className={styles.icons} src={calendar} alt="calendar"></img>
          <small>Week</small>

          <img src={down} className={styles.icons} alt="down-arrow"></img>
        </div>
        <div className={styles.dates}>
          <p>10-16 December,2019</p>
        </div>
        <div className={styles.navs}>
          <button className={styles.navBtn}>
            <img className={styles.icons} src={left} alt="left-arrow"></img>
          </button>
          <button className={styles.navBtn}>
            <img className={styles.icons} src={right} alt="right-arrow"></img>
          </button>
        </div>
      </div>
    </div>
  );
};
export default head;
