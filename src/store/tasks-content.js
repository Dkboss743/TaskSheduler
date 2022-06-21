import React from "react";
const TaskContext = React.createContext({
  tasks: [],
  error: false,
  addTask: (item) => {},
});
export default TaskContext;
