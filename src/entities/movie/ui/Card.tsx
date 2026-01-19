export default function Card({ movies }) {
  return (
    <li className="Card">
      <img
        src={movies.posterUrl}
        alt={movies.nameRu || movies.nameOriginal || movies.nameEn}
      />
    </li>
  );
}
