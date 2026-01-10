import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import type { requestType } from '../../api/http.api';
import useFetchData from '../../hook/useFetchData';
import Button from '../atoms/Button';
import Card from '../molecules/Card';

export default function FoundItem() {
  const { data, loading } = useFetchData();
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const searchQuery = searchParams.get('search') || '';

  const filterData = data.filter(item => {
    const name = item?.name_russian;
    return name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (loading) return <p>Loading...</p>;

  if (!searchQuery) return null;

  return (
    <div>
      <Button onClick={goBack}>back</Button>

      <div className="CardsList">
        {filterData.length > 0 ? (
          filterData.map((item: requestType) => (
            <Link
              key={item.name_original}
              to={
                item.type === 'film'
                  ? `/movie/${item.name_original}`
                  : `/serial/${item.name_original}`
              }
            >
              <Card data={item} />
            </Link>
          ))
        ) : (
          <p>Ничего не найдено по запросу: {searchQuery}</p>
        )}
      </div>
    </div>
  );
}
