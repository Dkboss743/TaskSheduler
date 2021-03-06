import "./App.css";
import Card from "./components/UI/card";
import Form from "./components/form/Form";
import Head from "./components/Head";
import CalendarHead from "./components/CalendarHead/CalendarHead";
import CalendarWrapper from "./components/UI/CalendarWrapper/CalendarWrapper";
import { useState } from "react";
import TaskProvider from "./store/taskProvider";
function App() {
  const [showForm, setShowForm] = useState(false);
  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <TaskProvider>
      <div className="grid">
        {showForm && <Form setShowForm={setShowForm}></Form>}
        {!showForm && (
          <button onClick={showFormHandler} className="showmainForm">
            Add Task
          </button>
        )}
        <CalendarWrapper>
          <Head></Head>
          <Card>
            <CalendarHead></CalendarHead>
          </Card>
        </CalendarWrapper>
      </div>
    </TaskProvider>
  );
}

export default App;
