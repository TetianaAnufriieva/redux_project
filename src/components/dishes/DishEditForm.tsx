import { useState, type FormEvent, type JSX } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useDispatch } from "react-redux";
import type Dish from "./types/Dish";

export default function DishEditForm(props: { dish: Dish }): JSX.Element {
  const { dish } = props;
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = (): void => {
    setToggle(!toggle);
  };

  const [title, setTitle] = useState<string>(dish.title);
  const [category, setCategory] = useState<string>(dish.category);
  const [image, setImage] = useState<string>(dish.image);
  const [price, setPrice] = useState<number>(dish.price);
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();

  function validateInputs(): boolean {
    if (title.trim() === "") {
      setError("Название не должно быть пустым");
      return false;
    }
    if (category.trim() === "") {
      setError("Выберите категорию");
      return false;
    }
    if (image.trim() === "") {
      setError("Заполните поле картинка");
      return false;
    }
    if (price < 0) {
      setError("Цена не может быть отрицательной");
      return false;
    }
    return true;
  }

  function resetInputsAndError(): void {
    setCategory(dish.category);
    setTitle(dish.title);
    setPrice(dish.price);
    setImage(dish.image);
    setError("");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (validateInputs()) {
      dispatch({
        type: "dishes/edit",
        payload: {
          title,
          category,
          image,
          price,
          id: dish.id,
        },
      });
      resetInputsAndError();
    }
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={handleToggle}
        className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-700 transition-all shadow-sm"
        title="Редактировать блюдо"
      >
        <EditNoteIcon fontSize="small" />
      </button>
      {toggle && (
        <form
          onSubmit={handleSubmit}
          className="absolute top-10 left-0 z-20 flex flex-col gap-2 bg-white p-4 rounded-xl shadow-lg border border-gray-200 w-64"
        >
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <label
            htmlFor="title"
            className="mb-1 text-sm font-medium text-gray-700 flex w-8"
          >
            title
          </label>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label
            htmlFor="title"
            className="mb-1 text-sm font-medium text-gray-700 w-8"
          >
            image
          </label>
          <input
            type="text"
            placeholder="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <label
            htmlFor="title"
            className="mb-1 text-sm font-medium text-gray-700 w-8"
          >
            category
          </label>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              category
            </option>
            <option value="main">main</option>
            <option value="dessert">dessert</option>
            <option selected value="snack">
              snack
            </option>
          </select>
          <label
            htmlFor="title"
            className="mb-1 text-sm font-medium text-gray-700 w-8"
          >
            price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button type="submit">Сохранить</button>
        </form>
      )}
    </div>
  );
}
