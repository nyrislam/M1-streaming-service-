import {
  useGetFilmsListQuery,
  useGetСollectionsTopAllQuery,
} from '../../entities/movie/api/endpointsKinopoiskApi';

export default function useMoviesQuery({ movieType, currentPage }) {
  const filmsListQuery = useGetFilmsListQuery({
    type: movieType?.value,
    page: currentPage,
  });

  const collectionsTopAllQuery = useGetСollectionsTopAllQuery({
    type: movieType?.value,
    page: currentPage,
  });
  const data = filmsListQuery.data || collectionsTopAllQuery.data;
  const isError = filmsListQuery.isError || collectionsTopAllQuery.isError;
  const isLoading =
    filmsListQuery.isLoading || collectionsTopAllQuery.isLoading;

  console.log(data, isError, isLoading);
  return { data, isError, isLoading };
}
