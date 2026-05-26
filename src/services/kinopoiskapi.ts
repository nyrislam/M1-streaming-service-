import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { builderQuery, Response } from "./types.ts";

const key = import.meta.env.VITE_KINOPOISK_KEY;

export const kinopoiskapi = createApi({
  reducerPath: "kinopoiskapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api/",
    method: "GET",
    headers: {
      "X-API-KEY": key,
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getMoviesTop: builder.query<Response, builderQuery>({
      query: ({ page, type }) =>
        `/v2.2/films/collections?type=${type}&page=${page}`,
    }),
    getMovies: builder.query<Response, builderQuery>({
      query: ({ countries, genreId, order, year, page, type, keyword }) =>
        `/v2.2/films?countries=${countries}&genres=${genreId}&order=${order}&type=${type}&ratingFrom=0&ratingTo=10&yearFrom=${year}&yearTo=${year}&page=${page}&keyword=${keyword}`,
    }),
    getFindMovies: builder.query<Response, builderQuery>({
      query: ({ id }) => `/v2.2/films/${id}`,
    }),
    getFindMoviesVideos: builder.query<Response, builderQuery>({
      query: ({ id }) => `/v2.2/films/${id}/videos`,
    }),
    getSequelsPrequelsMovies: builder.query<Response, builderQuery>({
      query: ({ id }) => `/v2.1/films/${id}/sequels_and_prequels`,
    }),
    getStaffMovies: builder.query<Response, builderQuery>({
      query: ({ id }) => `/v1/staff?filmId=${id}`,
    }),
    getStaffDeteilMovies: builder.query<Response, builderQuery>({
      query: ({ id }) => `/v1/staff/${id}`,
    }),
    getSearchMovies: builder.query<Response, builderQuery>({
      query: ({ keyword }) =>
        `/v2.1/films/search-by-keyword?keyword=${keyword}`,
    }),
  }),
});
export const {
  useGetMoviesQuery,
  useGetMoviesTopQuery,
  useGetFindMoviesQuery,
  useGetFindMoviesVideosQuery,
  useGetStaffMoviesQuery,
  useGetStaffDeteilMoviesQuery,
  useGetSequelsPrequelsMoviesQuery,
  useGetSearchMoviesQuery,
} = kinopoiskapi;
