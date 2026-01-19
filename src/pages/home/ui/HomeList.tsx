import { useGetСollectionsTopAllQuery } from '../../../entities/movie/api/endpointsKinopoiskApi';
import Card from '../../../entities/movie/ui/Card';

export default function TopList({ type }: { type: string }) {
  const { data, isLoading } = useGetСollectionsTopAllQuery({ type, page: 1 });
  if (isLoading) return <p>isLoading: {isLoading}</p>;
  return (
    <ul className="CardsList">
      {data.items.map(el => (
        <Card movies={el} />
      ))}
    </ul>
  );
}
