import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: "",
  genreId: "",
  order: "NUM_VOTE",
  year: "",
  type: "",
  page: 1,
  keyword: "",
};

export const searchQuerySlice = createSlice({
  name: "searchQuerySlice",
  initialState,
  reducers: {
    searchQuery: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { searchQuery } = searchQuerySlice.actions;
export default searchQuerySlice.reducer;
