import { useRef } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setShowForm(false);
  };
  const titleRef = useRef();
  const timeRef = useRef();
  return (
    <div className={styles.card}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" ref={titleRef}></input>
        </div>
        <div>
          <label>Time</label>
          <select ref={timeRef} name="time" id="time">
            <option value="0">9:30AM - 10:30AM</option>
            <option value="1">10:30AM - 11:30AM</option>
            <option value="2">11:30AM - 12:30PM</option>
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
