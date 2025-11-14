import type Movie from "./types/Movie";
import type { Action } from "./types/Action";
import { uid } from "uid";

const initialState: Movie[] = [
  {
    id: uid(),
    title: "The Fantastic Four: First Steps",
    image:
      "https://m.media-amazon.com/images/M/MV5BOGM5MzA3MDAtYmEwMi00ZDNiLTg4MDgtMTZjOTc0ZGMyNTIwXkEyXkFqcGc@._V1_.jpg",
    genre: "adventure",
    country: "United States",
    releaseDate: "July 25, 2025",
  },
  {
    id: uid(),
    title: "Weapons",
    image: "https://posterspy.com/wp-content/uploads/2025/05/IMG_1907.jpeg",
    genre: "horror, mystery, thrille",
    country: "United States",
    releaseDate: "August 8, 2025",
  },
  {
    id: uid(),
    title: "The Ice Tower",
    image:
      "https://cdn.posteritati.com/posters/000/000/076/893/the-ice-tower-md-web.jpg",
    genre: "Fantasy, Drama",
    country: "France, Germany, Italy",
    releaseDate: "Februar 16, 2025",
  },
  {
    id: uid(),
    title: "Frankenstein",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzYzNDYxMTQtMTU4OS00MTdlLThhMTQtZjI4NGJmMTZmNmRiXkEyXkFqcGc@._V1_.jpg",
    genre: "horror",
    country: "United States",
    releaseDate: "November 7, 2025",
  },
  {
    id: uid(),
    title: "Sarah's Oil",
    image:
      "https://m.media-amazon.com/images/M/MV5BODYwNmM0NjUtMGFlMS00YjIzLWEwYTAtZGE3ZWYzMGUxMmZkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genre: "biography",
    country: "United States",
    releaseDate: "November 7, 2025",
  },
];
export default function moviesReducer(
  state: Movie[] = initialState,
  action: Action
): Movie[] {
  switch (action.type) {
    case "movies/add":
      return [...state, { ...action.payload, id: uid() }];
    case "movies/delete":
      return state.filter((movie) => movie.id !== action.payload);
    case "movies/editTitle":
      return state.map((movie) =>
        movie.id === action.payload.id
          ? { ...movie, title: action.payload.title }
          : movie
      );
    default:
      return state;
  }
}
