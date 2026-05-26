import AcroolCarousel, { AcroolSlideCard } from "@acrool/react-carousel";
import { Box, Rating, Stack, Tooltip } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import {
  useGetFindMoviesQuery,
  useGetSequelsPrequelsMoviesQuery,
  useGetStaffMoviesQuery,
} from "../../../services/kinopoiskapi";
import ErrorMessage from "../../ui/ErrorMessage/ErrorMessage";
import LoadingMessage from "../../ui/LoadingMessage/LoadingMessage";

export default function Card() {
  const {
    data: movie,
    error: movieError,
    isLoading: movieLoading,
  } = useGetFindMoviesQuery({
    id: useParams().kinopoiskId,
  });
  const { data: sequels } = useGetSequelsPrequelsMoviesQuery({
    id: useParams().kinopoiskId,
  });
  const { data: staff } = useGetStaffMoviesQuery({
    id: useParams().kinopoiskId,
  });

  const acroolSlideItemData = staff?.map((el) => {
    return (
      <AcroolSlideCard key={el.staffId}>
        <Link key={el.staffId} to={`/staff/${el.staffId}`}>
          <img src={el.posterUrl} height="175" />
          <p
            style={{ fontSize: 12 }}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {el.nameRu}
          </p>
        </Link>
      </AcroolSlideCard>
    );
  });
  if (movieLoading) return <LoadingMessage />;
  if (movieError) return <ErrorMessage />;
  if (!movie) return <p>No data</p>;
  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 3, md: 12 }}
        mt={4}
        mb={4}
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        <img src={movie.posterUrl} alt="" height="350" />
        <section>
          {movie.logoUrl !== null ? (
            <img src={movie.logoUrl} alt="" height="100" />
          ) : (
            <h1>{movie.nameRu}</h1>
          )}
          <p>{movie.description}</p>
          <Stack spacing={1} mt={2}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ width: 100, fontWeight: "bold" }}>Year:</Box>
              <Box>{movie.year}</Box>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ width: 100, fontWeight: "bold" }}>Genre:</Box>
              <Box>{movie.genres?.map((g) => g.genre).join(", ")}</Box>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ width: 100, fontWeight: "bold" }}>Country:</Box>
              <Box>{movie.countries?.map((c) => c.country).join(", ")}</Box>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ width: 100, fontWeight: "bold" }}>filmLength:</Box>
              <Box>
                {movie.filmLength == null ? "?" : movie.filmLength + " Min"}
              </Box>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            {movie.ratingKinopoisk && (
              <Stack>
                <Tooltip title={`${movie.ratingKinopoisk} / 10`}>
                  <Box>
                    <Rating
                      name="half-rating-read"
                      defaultValue={movie.ratingKinopoisk / 2}
                      precision={0.5}
                      readOnly
                    />
                  </Box>
                </Tooltip>
              </Stack>
            )}
          </Stack>
        </section>
      </Stack>
      <video controls>
        <source
          src={
            "https://www.youtube.com/watch?v=cNysTY9R1Xc&list=RDcNysTY9R1Xc&start_radio=1&t=1348s"
          }
        />
      </video>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
        m={2}
      >
        {sequels?.map((el) => (
          <Link key={el.filmId} to={`/${el.filmId}`}>
            <img src={el.posterUrl} alt="" height="350" />
          </Link>
        ))}
      </Stack>
      <h2>Режиссеры:</h2>
      <AcroolCarousel
        data={acroolSlideItemData}
        slidesPerGroup={9}
        slidesPerView={9}
        isEnableNavButton
        isEnableAutoPlay
        breakpoints={{
          360: {
            autoPlayTime: 0,
            slidesPerGroup: 3,
            slidesPerView: 3,
          },
          852: {
            slidesPerGroup: 6,
            slidesPerView: 6,
          },
          1080: {
            slidesPerGroup: 9,
            slidesPerView: 9,
          },
        }}
      />
    </>
  );
}
