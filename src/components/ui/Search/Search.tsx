import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, Icon, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { searchQuery } from "../../../features/searchQuerySlice";
import {
  kinopoiskapi,
  useGetMoviesQuery,
} from "../../../services/kinopoiskapi";

export default function Search() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countries, genreId, order, year, type, page, keyword } = useSelector(
    (state: any) => state.searchQuery,
  );
  const { data, error, isLoading } = useGetMoviesQuery({
    countries,
    genreId,
    order,
    year,
    type,
    page,
    keyword,
  });
  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      dispatch(searchQuery({ keyword: input }));
    }, 1000);
    return () => clearTimeout(setTimeoutId);
  }, [input]);
  console.log(data);
  return (
    <Autocomplete
      disablePortal
      getOptionLabel={(option) =>
        `${option.nameRu || option.nameOriginal || option.nameEn}`
      }
      options={data ? data.items : []}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="search" />}
      onInputChange={(_, value) => {
        setInput(value);
      }}
      onChange={(_, value) => {
        console.log(value);
        navigate(`/${value.kinopoiskId}`);
      }}
    />
  );
}
