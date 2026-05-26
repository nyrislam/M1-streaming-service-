import { Pagination } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { selectQuery } from "../../../features/currentQuerySlice";
import useMoviesQuery from "../../../hook/useMoviesQuery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadingMessage from "../LoadingMessage/LoadingMessage";
import SelectMovies from "../SelectMovies/SelectMovies";
// import Pagination from "../Pagination/Pagination";
import styles from "./MoviesList.module.css";

export default function MoviesList({
  title,
  type,
  back,
  filter,
}: {
  title: string;
  type: string;
  back: boolean;
  filter: boolean;
}) {
  const {
    data,
    error,
    isLoading,
    page,
    setPage,
    countries,
    genreId,
    order,
    year,
  } = useMoviesQuery({
    type,
  });
  const navigate = useNavigate();
  return (
    <>
      {error && <ErrorMessage />}
      {isLoading && <LoadingMessage />}
      <ul>
        {back && <button onClick={(back) => navigate(-1)}>back</button>}
        {filter && (
          <SelectMovies
            order={order}
            countries={countries}
            genreId={genreId}
            year={year}
          />
        )}
        <h1>
          <Link to={`/type/${title}`}>{title}</Link>
        </h1>
        <li>
          {data?.items.map((el) => (
            <Link key={el.kinopoiskId} to={`/${el.kinopoiskId}`}>
              <img src={el.posterUrlPreview} alt="" className={styles.img} />
            </Link>
          ))}
        </li>
        {/* <Pagination page={page} setPage={setPage} maxPage={data?.totalPages} /> */}
        <Pagination
          defaultPage={page}
          count={data?.totalPages}
          color="primary"
          onChange={(_, value) => setPage(value)}
        />
      </ul>
    </>
  );
}
