export default function Card({ movie }) {
  return (
    <li className="Card">
      <img
        src={movie.posterUrl}
        alt={movie.nameRu || movie.nameOriginal || movie.nameEn}
      />
    </li>
  );
}
