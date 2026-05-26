import { Stack } from "@mui/material";

import { top_list } from "../../../constants";
import MoviesList from "../../ui/MoviesList/MoviesList";
import MoviesSlider from "../../ui/MoviesSlider/MoviesSlider";
import MoviesSliderV2 from "../../ui/MoviesSlider/MoviesSlider copy";

export default function Home() {
  return (
    <>
      <Stack direction="row" justifyContent="center" flexWrap="wrap">
        {top_list.map((item) => {
          return <MoviesSlider title={item.title} type={item.get_api} />;
        })}
      </Stack>
    </>
  );
}
