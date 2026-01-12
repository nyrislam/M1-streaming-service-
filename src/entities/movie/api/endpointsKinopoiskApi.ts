import { baseApi } from '../../../shared/api/baseApi';
import type { queryKinopoiskApiType } from '../model/types';

export const movieApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getСollectionsTopAll: builder.query({
      query: ({ type, page }: queryKinopoiskApiType) =>
        `/v2.2/films/collections?type=${type}&page=${page}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetСollectionsTopAllQuery } = movieApi;
