import { useRef, useState } from "react";
import styles from "./Form.module.css";
import TaskContext from "../../store/tasks-content";
import { useContext } from "react";
const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let first = true;
const Form = (props) => {
  const taskCtx = useContext(TaskContext);
  const [hasError, setHasError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const tasks = titleRef.current.value;
    const time = timeRef.current.value;
    const dayi = dayRef.current.value;
    const findIndex = taskCtx.tasks[daysOfTheWeek[dayi - 1]].findIndex(
      (cur) => cur.id === time
    );
    if (findIndex === -1) {
      taskCtx.addTask({
        id: time,
        day: daysOfTheWeek[dayi - 1],
        task: tasks,
      });
      setHasError(false);
      props.setShowForm(false);
    } else {
      setHasError(true);
    }
  };

  const titleRef = useRef();
  const timeRef = useRef();
  const dayRef = useRef();
  const closeForm = () => {
    props.setShowForm(false);
  };
  return (
    <div className={styles.card}>
      {hasError && alert("Task already exist on given shedule")}
      <form onSubmit={handleSubmit}>
        <button onClick={closeForm} className={styles.close}>
          X
        </button>
        <div>
          <label>Title</label>
          <input type="text" ref={titleRef}></input>
        </div>
        <div>
          <label>Time</label>
          <select ref={timeRef} name="time" id="time">
            <option value="1">8:30AM - 9:30AM</option>
            <option value="2">9:30AM - 10:30AM</option>
            <option value="3">10:30AM - 11:30AM</option>
            <option value="4">11:30AM - 12:30PM</option>
          </select>
          <label>Day</label>
          <select ref={dayRef} name="time" id="time">
            <option value="1">Sun</option>
            <option value="2">Mon</option>
            <option value="3">Tue</option>
            <option value="4">Wed</option>
            <option value="5">Thu</option> <option value="6">Fri</option>{" "}
            <option value="7">Sat</option>
          </select>
        </div>
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
