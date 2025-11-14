import type { JSX } from "react";
import "./App.css";
// import Counter from "./components/counter/Counter";
// import Sandwich from "./components/sandwich/Sandwich";
// import TaskCreation from "./components/tasks/TaskCreation";
// import Tasks from "./components/tasks/Tasks";
// import DishForm from "./components/dishes/DishForm";
// import DishesList from "./components/dishes/DishesList";
import MovieCreation from "./components/movies/MovieCreation";
import Movies from "./components/movies/Movies";


function App(): JSX.Element {
  return (
    <div>
      {/* <DishForm />
      <DishesList />
      <Counter />
      <Sandwich />
      <Tasks />
      <TaskCreation /> */}
      <MovieCreation />
      <Movies />
    </div>
  );
}

export default App;
