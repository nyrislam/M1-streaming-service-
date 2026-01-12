import { baseApi } from '../../../shared/api/baseApi';

export const movieApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getFilmsTop: builder.query({
      query: () =>
        `/v2.2/films?order=RATING&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`,
    }),
    getSeriesTop: builder.query({
      query: () =>
        `/v2.2/films?order=RATING&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`,
    }),
    getFindId: builder.query({
      query: id => `/v2.2/films/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetFilmsTopQuery, useGetFindIdQuery, useGetSeriesTopQuery } =
  movieApi;
