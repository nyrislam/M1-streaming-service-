import { useLocation, useNavigate } from 'react-router-dom';

import { MOVIE_LISTS, TOP_LISTS } from '../../../constants';
import {
  useGetFilmsListQuery,
  useGetСollectionsTopAllQuery,
} from '../../../entities/movie/api/endpointsKinopoiskApi';
import Card from '../../../entities/movie/ui/Card';
import Pagination from '../../../entities/movie/ui/Pagination';
import Button from '../../../shared/ui/Button';

export default function FindList({ find }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const location = useLocation();

  const movieType =
    find === 'Films'
      ? MOVIE_LISTS.find(el => el.url === location.pathname)
      : TOP_LISTS.find(el => el.url === location.pathname);

  const filmsListQuery = useGetFilmsListQuery({
    type: movieType?.value,
    page: 1,
  });

  const collectionsTopAllQuery = useGetСollectionsTopAllQuery({
    type: movieType?.value,
    page: 1,
  });

  const { data, isLoading } =
    find === 'Films' ? filmsListQuery : collectionsTopAllQuery;
  console.log('f', data?.totalPages);

  if (isLoading) return <p>isLoading: {isLoading}</p>;
  return (
    <section className="py-4">
      <div className="lex flex gap-4">
        <Button onClick={goBack}> Back </Button>
        <h2 className="pb-4">{movieType?.title}</h2>
      </div>
      <ul className="CardsList">
        {data.items.map(el => (
          <Card movies={el} />
        ))}
        {data?.totalPages && <Pagination totalPages={data.totalPages} />}
      </ul>
    </section>
  );
}
