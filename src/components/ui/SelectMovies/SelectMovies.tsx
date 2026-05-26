import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { resetQuery, selectQuery } from "../../../features/currentQuerySlice";
import { filterdb } from "./filterdb";

export default function SelectMovies({ order, countries, genreId, year }) {
  const dispatch = useDispatch();
  const ordersList = [
    { title: "По рейтингу", value: "RATING" },
    { title: "По оценкам", value: "NUM_VOTE" },
  ];
  const data = new Date().getFullYear();
  const yearList: number[] = [];
  for (let i = data; i > data - 60; i--) {
    yearList.push(i);
  }
  console.log(filterdb);
  return (
    <Stack sx={{ mt: 1, flexDirection: { sm: "column", md: "row" }, gap: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Order</InputLabel>
        <Select
          label="Age"
          value={order}
          onChange={(event) =>
            dispatch(selectQuery({ order: event.target.value }))
          }
        >
          {ordersList.map((item) => (
            <MenuItem value={item.value}>{item.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">countries</InputLabel>
        <Select
          label="countries"
          value={countries}
          onChange={(event) =>
            dispatch(selectQuery({ countries: event.target.value }))
          }
        >
          {filterdb.countries.map((item) => (
            <MenuItem value={item.id}>{item.country}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          label="Year"
          value={year}
          onChange={(event) =>
            dispatch(selectQuery({ year: event.target.value }))
          }
        >
          {yearList.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Genre</InputLabel>
        <Select
          label="Genre"
          value={genreId}
          onChange={(event) =>
            dispatch(selectQuery({ genreId: event.target.value }))
          }
        >
          {filterdb.genres.map((item) => (
            <MenuItem value={item.id}>{item.genre}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="outlined"
        color="error"
        onClick={() => dispatch(resetQuery())}
      >
        Reset
      </Button>
    </Stack>
  );
}
