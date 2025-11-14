import { useEffect, useState, type FormEvent, type JSX } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import type Movie from "./types/Movie";

export default function MovieEdith(props: { movie: Movie }): JSX.Element {
  const { movie } = props;
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = (): void => {
    setToggle(!toggle);
  };

  const [title, setTitle] = useState<string>(movie.title);
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();

  function validateInputs(): boolean {
    if (title.trim() === "") {
      setError("Название фильма не должно быть пустым");
      return false;
    }

    return true;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (validateInputs()) {
      dispatch({
        type: "movies/editTitle",
        payload: {
          title,
          id: movie.id,
        },
      });
      setError(""); // очищаем ошибки
      setToggle(false); // закрываем форму
    }
  }

  // Обновляем локальное состояние, когда movie.title изменяется
  useEffect(() => {
    setTitle(movie.title);
  }, [movie.title]);

  return (
    <div className="relative inline-block">
      <button
        onClick={handleToggle}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-700 transition-all shadow-sm"
        title="Редактировать"
      >
        <EditIcon fontSize="small" />
      </button>
      {toggle && (
        <form
          onSubmit={handleSubmit}
          className="absolute top-10 left-0 z-20 flex flex-col gap-2 bg-white p-4 rounded-xl shadow-lg border border-gray-200 w-64"
        >
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <label
            htmlFor="title"
            className="mb-1 text-sm font-medium text-gray-700 flex"
          >
            Название фильма
          </label>
          <input
            type="text"
            placeholder="Введите новое название"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <button
            type="submit"
            className="col-span-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition"
          >
            🔒 Сохранить
          </button>
        </form>
      )}
    </div>
  );
}
