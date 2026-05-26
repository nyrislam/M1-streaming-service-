type Pages = {
  url: string;
  title: string;
};
type Typelist = {
  title: string;
  get_api: string;
};
export const pages: Pages[] = [
  {
    url: "/",
    title: "Home",
  },
  {
    title: "Films",
    url: "/films",
  },
  {
    title: "Series",
    url: "/series",
  },
];

export const top_list: Typelist[] = [
  {
    title: "Popular",
    get_api: "TOP_POPULAR_ALL",
  },
  {
    title: "Top Films",
    get_api: "TOP_250_MOVIES",
  },
  {
    title: "Top Series",
    get_api: "TOP_250_TV_SHOWS",
  },
];

export const movies_list: Typelist[] = [
  {
    title: "Films",
    get_api: "TOP_250_MOVIES",
  },
  {
    title: "Series",
    get_api: "TOP_250_TV_SHOWS",
  },
];
