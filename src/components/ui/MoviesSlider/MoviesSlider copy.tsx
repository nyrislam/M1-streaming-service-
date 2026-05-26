import { Stack } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useMoviesQuery from "../../../hook/useMoviesQuery";
import styles from "./MoviesSlider.module.css";

export default function MoviesSliderV2({
  title,
  type,
  back,
}: {
  title: string;
  type: string;
  back: boolean;
}) {
  const { data, error, isLoading, page, setPage } = useMoviesQuery({ type });
  const [currentPage, setCurrentPage] = useState(0);
  const togglePrev = () =>
    setCurrentPage((el) => (el - 4 < 0 ? data.items.length - 4 : el - 4));
  const toggleNext = () => setCurrentPage((el) => (el + 4 > 0 ? 0 : el + 4));
  console.log(currentPage, currentPage + 4);
  return (
    <>
      {error && <p>error</p>}
      {isLoading && <p>isLoading...</p>}
      <Stack direction="row" justifyContent="center" flexWrap="wrap">
        <ul>
          <h1>
            <Link to={`/type/${title}`}>{title}</Link>
          </h1>
          <li>
            {data?.items?.slice(currentPage, currentPage + 4).map((el) => (
              <Link key={el.kinopoiskId} to={`/${el.kinopoiskId}`}>
                <img src={el.posterUrlPreview} className={styles.img} />
              </Link>
            ))}

            <button onClick={togglePrev}>prev</button>
            <button onClick={toggleNext}>next</button>
          </li>
        </ul>
      </Stack>
    </>
  );
}
