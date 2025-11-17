import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import type { MovieId } from "./types/Movie";
import selectMovies from "./selectors";
import MovieEdit from "./MovieEdit";

export default function Movies(): JSX.Element {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  const handleDelete = (id: MovieId): void => {
    dispatch({ type: "movies/delete", payload: id });
  };

  if (movies.length === 0) {
    return <p className="text-center p-6 text-gray-500">Фильмы отсутствуют</p>;
  }

  return (
    <div className="bg-slate-400">
      <div className="mx-auto max-w-5xl px-2 pt-4 pb-8 sm:px-3 lg:px-4">
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
          {movies.map((movie) => (
            <li
              key={movie.id}
              className="relative group bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="relative">
                <p className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
                  {movie.genre}
                </p>
                <div className="w-full">
                  <img
                    // className="w-full h-64 object-cover lg:h-80 rounded-t-xl bg-gray-200"
                    className="w-full h-auto max-h-48 sm:max-h-56 md:max-h-64 lg:max-h-80 object-cover rounded-t-xl bg-gray-200 transition-all"
                    src={movie.image}
                    alt={movie.title}
                  />
                </div>
              </div>

              {/* ---- SIGNATURE BLOCK ---- */}
              <div className="p-3">
                <h3 className="text-base font-semibold text-gray-800 truncate">
                  {movie.title}
                </h3>

                <div className="text-sm text-gray-600 flex justify-between mt-1">
                  <span>{movie.country}</span>
                  <span className="text-gray-500">{movie.releaseDate}</span>
                </div>
              </div>

              {/* ---- BUTTONS ---- */}
              <div className="flex justify-center gap-6 pb-4">
                {/* DELETE BUTTON */}
                <button
                  onClick={() => handleDelete(movie.id)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 hover:scale-110 transition-all"
                  title="Удалить фильм"
                >
                  <DeleteIcon fontSize="small" />
                </button>

                {/* EDIT BUTTON */}
                <MovieEdit movie={movie} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
