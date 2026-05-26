import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: "",
  genreId: "",
  order: "NUM_VOTE",
  year: "",

  Films: { countries: "", genreId: "", order: "RATING", year: "", page: 1 },
  Series: { countries: "", genreId: "", order: "RATING", year: "", page: 1 },

  type: "",
  page: 1,
};

export const currentQuerySlice = createSlice({
  name: "currentQuerySlice",
  initialState,
  reducers: {
    selectQuery: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    resetQuery: () => ({
      ...initialState,
    }),
  },
});

export const { selectQuery, resetQuery } = currentQuerySlice.actions;
export default currentQuerySlice.reducer;
