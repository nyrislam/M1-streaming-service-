import { baseApi } from '../../../shared/api/baseApi';
import type { queryKinopoiskApiType } from '../model/types';

export const movieApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getСollectionsTopAll: builder.query({
      query: ({ type, page }: queryKinopoiskApiType) =>
        `/v2.2/films/collections?type=${type}&page=${page}`,
    }),
    getFilmsList: builder.query({
      query: ({ type, page }: queryKinopoiskApiType) =>
        `/v2.2/films?order=RATING&type=${type}&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=${page}`,
    }),
    getСollectionsTop: builder.query({
      query: ({ type, page }: queryKinopoiskApiType) =>
        `/v2.2/films/collections?type=${type}&page=${page}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetСollectionsTopAllQuery, useGetFilmsListQuery } = movieApi;
export const { useGetСollectionsTopQuery } = movieApi;
