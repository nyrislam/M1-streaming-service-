<<<<<<< HEAD
export default function Card({ movies }) {
  return (
    <li className="Card">
      <img
        src={movies.posterUrl}
        alt={movies.nameRu || movies.nameOriginal || movies.nameEn}
=======
export default function Card({ movie }) {
  return (
    <li className="Card">
      <img
        src={movie.posterUrl}
        alt={movie.nameRu || movie.nameOriginal || movie.nameEn}
>>>>>>> fc41298bbc62b017d2e0d0506097a8efa5ccbba0
      />
    </li>
  );
}
