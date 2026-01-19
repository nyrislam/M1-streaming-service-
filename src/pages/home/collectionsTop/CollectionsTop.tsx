import { useGetСollectionsTopQuery } from '../../../entities/movie/api/endpointsKinopoiskApi';
import Card from '../../../entities/movie/ui/Card';

export default function CollectionsTop({
  type,
  title,
}: {
  type: string;
  title: string;
}) {
  const { data, isLoading } = useGetСollectionsTopQuery({ type, page: 1 });
  if (isLoading) return <p>isLoading</p>;
  return (
    <div>
      <h1>{title}</h1>
      <ul className="CardsList">
        {data?.items?.map(el => (
          <Card movie={el} />
        ))}
      </ul>
    </div>
  );
}
