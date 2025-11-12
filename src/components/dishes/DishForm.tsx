import { useState, type FormEvent, type JSX } from "react";
import { useDispatch } from "react-redux";

export default function DishForm(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
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
  function clearInputsAndError(): void {
    setCategory("");
    setTitle("");
    setPrice(0);
    setImage("");
    setError("");
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (validateInputs()) {
      dispatch({
        type: "dishes/create",
        payload: { title, category, price, image },
      });
      clearInputsAndError();
    }
  }
  return (
    <div>
      <p className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent">
        Форма создания меню
      </p>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form
        onSubmit={handleSubmit}
        className="shadow-xl p-4 flex flex-row gap-4 justify-between"
      >
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
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
          <option value="snack">snack</option>
        </select>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="rounded-md" type="submit">
          Добавить блюдо
        </button>
      </form>
    </div>
  );
}
