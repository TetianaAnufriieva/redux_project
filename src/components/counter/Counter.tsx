import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Counter(): JSX.Element {
  const dispatch = useDispatch();
  function handlePlus(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "counter/plus", payload: 1 });
  }
  function handleMinus(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "counter/minus", payload: 1 });
  }
  function handleReset(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "counter/reset" });
  }
  const counter = useSelector((state: RootState) => state.counter.value);
  // useSelector - функция для получения значения централизованного состояния
  return (
    <div className="container mt-4">
      <h2>Counter</h2>
      <div className="d-flex align-items-center justify-content-center gap-3">
        <button type="button" className="btn btn-success" onClick={handlePlus}>
          +
        </button>
        <span>{counter}</span>
        <button type="button" className="btn btn-danger" onClick={handleMinus}>
          -
        </button>
        <button type="button" className="btn btn-warning" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
