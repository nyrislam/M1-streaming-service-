import { useGetСollectionsTopAllQuery } from '../../entities/movie/api/endpointsKinopoiskApi';

export default function Movies() {
  const { data, error, isLoading } = useGetСollectionsTopAllQuery({
    type: 'TOP_POPULAR_ALL',
    page: 1,
  });
  if (isLoading) return <h2>Loading</h2>;
  return (
    <div className="lex flex-col min-h-screen">
      Home
      <ul>
        {data.items.map(el => (
          <li key={el.kinopoiskId}>
            <img
              src={el.posterUrl}
              alt={el.nameRu || el.nameOriginal || el.nameEn}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
