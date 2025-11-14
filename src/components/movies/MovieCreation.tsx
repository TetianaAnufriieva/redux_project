import { useState, type FormEvent, type JSX } from "react";
import { useDispatch } from "react-redux";
export default function MovieCreation(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [releaseDate, setReleaseDate] = useState<string>("");
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();

  function validateInputs(): boolean {
    if (title.trim() === "") {
      setError("Название фильма не должно быть пустым");
      return false;
    }
    if (image.trim() === "") {
      setError("Введите ссылку на изображение");
      return false;
    }
    if (genre.trim() === "") {
      setError("Выберите жанр");
      return false;
    }
    if (country.trim() === "") {
      setError("Заполните название страны");
      return false;
    }
    if (releaseDate.trim() === "") {
      setError("Заполните дату выпуска фильма");
      return false;
    }
    return true;
  }

  function clearInputsAndError(): void {
    setTitle("");
    setImage("");
    setGenre("");
    setCountry("");
    setReleaseDate("");
    setError("");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (validateInputs()) {
      dispatch({
        type: "movies/add",
        payload: { title, image, genre, country, releaseDate },
      });
      clearInputsAndError();
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-12">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        🍿 Movies Library
      </h2>

      {error && (
        <div className="mb-4 text-red-600 font-medium text-center">{error}</div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <input
          type="text"
          placeholder="Название фильма"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <input
          type="text"
          placeholder="Ссылка на изображение"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          <option value="" disabled>
            Жанр
          </option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="animation">Animation</option>
          <option value="biography">Biography</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="documentary">Documentary</option>
          <option value="drama">Drama</option>
          <option value="family">Family</option>
          <option value="fantasy">Fantasy</option>
          <option value="history">History</option>
          <option value="horror">Horror</option>
          <option value="thriller">Thriller</option>
          <option value="western">Western</option>
        </select>

        <input
          type="text"
          placeholder="Страна"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <input
          type="text"
          placeholder="Дата выпуска"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <button
          type="submit"
          className="col-span-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition"
        >
          🎥 Добавить фильм
        </button>
      </form>
    </div>
  );
}
