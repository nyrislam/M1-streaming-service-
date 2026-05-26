import { Stack } from "@mui/material";

import { movies_list } from "../../../constants";
import MoviesList from "../../ui/MoviesList/MoviesList";
import MoviesSlider from "../../ui/MoviesSlider/MoviesSlider";
import MoviesSliderV2 from "../../ui/MoviesSlider/MoviesSlider copy";

export default function Films() {
  return (
    <MoviesList
      title={movies_list[0].title}
      type={movies_list[0].get_api}
      back={false}
    />
  );
}
