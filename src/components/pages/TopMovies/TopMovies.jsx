import { useParams } from "react-router-dom";

import { movies_list, top_list } from "../../../constants";
import MoviesList from "../../ui/MoviesList/MoviesList";

export default function TopMovies() {
  const { title } = useParams();

  const matchIndex =
    title === "Films" || title === "Series"
      ? movies_list.findIndex((el) => el.title === title)
      : top_list.findIndex((el) => el.title === title);

  const data =
    title === "Films" || title === "Series"
      ? movies_list[matchIndex]
      : top_list[matchIndex];

  return (
    <MoviesList
      title={data.title}
      type={data.get_api}
      back={true}
      filter={title === "Films" || (title === "Series" && true)}
    />
  );
}
