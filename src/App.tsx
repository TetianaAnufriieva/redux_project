import type { JSX } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import Sandwich from "./components/sandwich/Sandwich";
import TaskCreation from "./components/tasks/TaskCreation";
import Tasks from "./components/tasks/Tasks";

function App(): JSX.Element {
  return (
    <div>
      <Counter />
      <Sandwich />
      <Tasks />
      <TaskCreation />
    </div>
  );
}

export default App;
