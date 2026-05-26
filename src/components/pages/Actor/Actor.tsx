import { AcroolSlideCard } from "@acrool/react-carousel";
import { Box, Stack } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";

import { useGetStaffDeteilMoviesQuery } from "../../../services/kinopoiskapi";
import ErrorMessage from "../../ui/ErrorMessage/ErrorMessage";
import LoadingMessage from "../../ui/LoadingMessage/LoadingMessage";

export default function Actor() {
  const { data, error, isLoading } = useGetStaffDeteilMoviesQuery({
    id: useParams().staffId,
  });
  console.log(data);

  if (isLoading) return <LoadingMessage />;
  if (error) return <ErrorMessage />;
  if (!data) return <p>No data</p>;
  return (
    <>
      <Stack direction="row" spacing={12} mt={4} mb={4}>
        <img src={data.posterUrl} alt="" />
        <Stack spacing={1} mt={2}>
          <h4>{data?.nameRu && "name: " + data?.nameRu}</h4>
          <h4>{data?.sex && "sex: " + data?.sex}</h4>
          <h4>
            {data?.birthday &&
              "birthday: " +
                data?.birthday +
                ` (${new Date().getFullYear() - new Date(data?.birthday).getFullYear()})`}
          </h4>
          <h4>{data?.birthplace && "birthplace: " + data?.birthplace}</h4>
          <h4>{data?.death && "death: " + data?.death}</h4>
          <h4>{data?.deathplace && "deathplace: " + data?.deathplace}</h4>
          <h4>{data?.films && "films: " + data.films.length}</h4>
        </Stack>
      </Stack>
      {data.films.map((el, index) => (
        <Stack direction="row" spacing="auto">
          <p>{index + 1}</p>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link key={el.filmId} to={`/${el.filmId}`}>
              <p>{el?.nameRu ? el.nameRu : "А где?"}</p>
            </Link>
          </Stack>
          <p>{el.rating ? el.rating : "Нету"}</p>
        </Stack>
      ))}
    </>
  );
}
