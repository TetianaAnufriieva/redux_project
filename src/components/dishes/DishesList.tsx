import type { JSX } from "react";
import DishEditForm from "./DishEditForm";
import { useDispatch, useSelector } from "react-redux";
import type { DishId } from "./types/Dish";
import ClearIcon from "@mui/icons-material/Clear";
import selectDishes from "./selectors";

export default function DishesList(): JSX.Element {
  const dishes = useSelector(selectDishes);
  const dispatch = useDispatch();
  const handleDelete = (id: DishId): void => {
    dispatch({ type: "dishes/delete", payload: id });
  };

  return (
    <div className="bg-slate-200 justify-between">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 justify-items-stretch">
          {dishes.map((dish) => (
            <li key={dish.id} className="group relative">
              <div>
                <p className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
                  {dish.category}
                </p>
                <img
                  className="w-full h-64 object-cover lg:h-80 rounded-md bg-gray-200 overflow-hidden flex items-center justify-center"
                  src={dish.image}
                  alt={dish.title}
                />
              </div>
              <div className="mt-4 flex justify-between">
                {" "}
                <h4 className="text-sm text-gray-700">{dish.title}</h4>{" "}
                <h4 className="text-sm text-gray-700">{dish.price} €</h4>
              </div>

              <div className="flex justify-center gap-16 mt-3">
                {/* Кнопка удаления */}
                <button
                  onClick={() => handleDelete(dish.id)}
                  className="w-10 h-10 flex items-center justify-center bg-red-100 text-red-600 hover:bg-red-200 hover:scale-110 transition-all"
                  title="Удалить блюдо"
                >
                  <ClearIcon fontSize="small" />
                </button>

                {/* Кнопка редактирования */}
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 hover:bg-blue-200 hover:scale-110 transition-all">
                  <DishEditForm dish={dish} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
