import TaskContext from "./tasks-content";
import { useReducer } from "react";
const defaultTask = {
  tasks: {
    Sun: [],
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
  },
  error: false,
};
const taskReduer = (state, action) => {
  const updatedTasks = state.tasks;
  let updatedError = state.error;
  if (action.type === "ADD") {
    const findIndex = state.tasks[action.item.day].findIndex(
      (cur) => cur.id === action.item.id
    );

    if (findIndex == -1) {
      updatedTasks[action.item.day].push({
        id: action.item.id,
        task: action.item.task,
      });
    } else if (findIndex != -1) {
      updatedError = true;
    }

    return {
      tasks: updatedTasks,
      error: updatedError,
    };
  }
};
const TaskProvider = (props) => {
  const [taskState, dispatchTaskAction] = useReducer(taskReduer, defaultTask);
  const addTaskHandler = (items) => {
    dispatchTaskAction({
      type: "ADD",
      item: items,
    });
  };
  const taskContext = {
    tasks: taskState.tasks,
    error: taskState.error,
    addTask: addTaskHandler,
  };
  return (
    <TaskContext.Provider value={taskContext}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
