import { Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import "@acrool/react-carousel/dist/index.css";

import AcroolCarousel, { AcroolSlideCard } from "@acrool/react-carousel";

import useMoviesQuery from "../../../hook/useMoviesQuery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadingMessage from "../LoadingMessage/LoadingMessage";
import styles from "./MoviesSlider.module.css";

export default function MoviesSlider({
  title,
  type,
}: {
  title: string;
  type: string;
}) {
  const { data, error, isLoading, page, setPage } = useMoviesQuery({
    type,
    customQuery: {
      countries: "",
      genreId: "",
      order: "NUM_VOTE",
      year: "",
      page: 1,
    },
  });

  const navigate = useNavigate();
  const acroolSlideItemData: TAcroolSlideItemDataList = data?.items?.map(
    (el) => {
      return (
        <AcroolSlideCard key={el.kinopoiskId}>
          <Link key={el.kinopoiskId} to={`/${el.kinopoiskId}`}>
            <img src={el.posterUrlPreview} className={styles.img} />
          </Link>
        </AcroolSlideCard>
      );
    },
  );
  return (
    <>
      {error && <ErrorMessage />}
      {isLoading && <LoadingMessage />}
      <Stack
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
        width="100%"
      >
        <h1>
          <Link to={`/type/${title}`}>{title}</Link>
        </h1>

        <AcroolCarousel
          data={acroolSlideItemData}
          slidesPerGroup={1}
          isEnableNavButton
          isEnableAutoPlay
          breakpoints={{
            360: {
              autoPlayTime: 0,
              slidesPerView: 2,
            },
            800: {
              slidesPerView: 3,
            },
            1080: {
              slidesPerView: 5,
            },
          }}
        />
      </Stack>
    </>
  );
}
