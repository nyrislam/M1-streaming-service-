import { configureStore } from "@reduxjs/toolkit";

import { currentQuerySlice } from "../features/currentQuerySlice";
import { searchQuerySlice } from "../features/searchQuerySlice";
import { kinopoiskapi } from "../services/kinopoiskapi";

export const store = configureStore({
  reducer: {
    currentQuery: currentQuerySlice.reducer,
    searchQuery: searchQuerySlice.reducer,
    [kinopoiskapi.reducerPath]: kinopoiskapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinopoiskapi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
