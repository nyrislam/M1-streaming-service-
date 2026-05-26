import { Stack } from "@mui/material";

import { movies_list } from "../../../constants";
import MoviesList from "../../ui/MoviesList/MoviesList";
import MoviesSlider from "../../ui/MoviesSlider/MoviesSlider";
import MoviesSliderV2 from "../../ui/MoviesSlider/MoviesSlider copy";

export default function Series() {
  return (
    <MoviesList
      title={movies_list[1].title}
      type={movies_list[1].get_api}
      back={false}
    />
  );
}
