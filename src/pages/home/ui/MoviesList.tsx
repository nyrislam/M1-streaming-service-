import { useGetFilmsListQuery } from '../../../entities/movie/api/endpointsKinopoiskApi';
import Card from '../../../shared/ui/Card';

export default function MoviesList({ type }: { type: string }) {
  const { data, isLoading } = useGetFilmsListQuery({ type, page: 1 });
  if (isLoading) return <p>isLoading: {isLoading}</p>;
  return (
    <ul className="CardsList">
      {data.items.map(el => (
        <Card movies={el} />
      ))}
    </ul>
  );
}
