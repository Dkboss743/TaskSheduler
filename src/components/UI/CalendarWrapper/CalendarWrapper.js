import styles from "./CalendarWrapper.module.css";
const CalendarWrapper = (props) => {
  return <div className={styles.wrap}>{props.children}</div>;
};
export default CalendarWrapper;
