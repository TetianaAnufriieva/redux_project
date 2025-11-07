import type { Action } from "./types/Action";
import type SandwichState from "./types/SandwichState";

// начальное значение централизованного состояния
const initialState: SandwichState = {
  value: "Sandwich ingredients: ",
};
export default function sandwichReducer(
  state: SandwichState = initialState,
  action: Action
): SandwichState {
  switch (action.type) {
    case "sandwich/addIngredient":
       return {
        ...state,
        value: state.value + action.payload,
      };
    case "sandwich/reset":
      return {
        ...state,
        value: (state.value = "Sandwich ingredients: "),
      };
    default:
      return state;
  }
}
