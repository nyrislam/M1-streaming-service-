import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectQuery } from "../features/currentQuerySlice";
import {
  useGetMoviesQuery,
  useGetMoviesTopQuery,
} from "../services/kinopoiskapi";

export default function useMoviesQuery({
  type,
  customQuery,
}: {
  type: string;
  customQuery?: {
    countries?: number;
    genreId?: number;
    order?: string;
    year?: number;
    page?: number;
  };
}) {
  const dispatch = useDispatch();

  const reduxQuery = useSelector((state: any) => state.currentQuery);
  const query = customQuery ?? reduxQuery;
  const { countries, genreId, order, year, page } = query;
  const setPage = (newPage: number) => dispatch(selectQuery({ page: newPage }));

  const responseTop = useGetMoviesTopQuery({ page: page, type });
  const responseType = useGetMoviesQuery({
    countries,
    genreId,
    order,
    year,
    page,
    type,
  });

  const { data, error, isLoading } =
    type == "TOP_250_MOVIES" ||
    type == "TOP_250_TV_SHOWS" ||
    type == "TOP_POPULAR_ALL"
      ? responseTop
      : responseType;
  return {
    data,
    error,
    isLoading,
    page,
    setPage,
    countries,
    genreId,
    order,
    year,
  };
}
