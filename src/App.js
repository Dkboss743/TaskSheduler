import logo from "./logo.svg";
import "./App.css";
import Card from "./components/UI/card";
import Head from "./components/Head";
import CalendarHead from "./components/CalendarHead/CalendarHead";
import CalendarWrapper from "./components/UI/CalendarWrapper/CalendarWrapper";
function App() {
  return (
    <div className="App">
      <CalendarWrapper>
        <Head></Head>
        <Card>
          <CalendarHead></CalendarHead>
        </Card>
      </CalendarWrapper>
    </div>
  );
}

export default App;
