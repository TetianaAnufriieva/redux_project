import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import styles from "./Sandwich.module.css";

export default function Sandwich(): JSX.Element {
  const dispatch = useDispatch();
  function handleAddBread(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "sandwich/addIngredient", payload: "🍞" });
  }
  function handleAddCheese(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "sandwich/addIngredient", payload: "🧀" });
  }
  function handleAddBacon(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "sandwich/addIngredient", payload: "🥓" });
  }
  function handleAddSalat(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "sandwich/addIngredient", payload: "🥬" });
  }

  function handleReset(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "sandwich/reset" });
  }
  const sandwich = useSelector((state: RootState) => state.sandwich.value);
  // useSelector - функция для получения значения централизованного состояния
  return (
    <div className={styles.mainContainer}>
      <img
        className={styles.image}
        src="https://www.menslife.com/upload/iblock/fd8/buterbrod_kak_sdelat_ego_poleznym.jpg"
        alt="sandwich"
      />
      <h2>{sandwich}</h2>
      <div>
        <button type="button" className={styles.btn} onClick={handleAddBread}>
          Bread
        </button>
        <button type="button" className={styles.btn} onClick={handleAddCheese}>
          Cheese
        </button>
        <button type="button" className={styles.btn} onClick={handleAddBacon}>
          Bacon
        </button>
        <button type="button" className={styles.btn} onClick={handleAddSalat}>
          Salat
        </button>
        <button type="button" className={styles.btn} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
