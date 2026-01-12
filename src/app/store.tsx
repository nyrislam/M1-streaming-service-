import { configureStore } from '@reduxjs/toolkit';

import { movieApi } from '../entities/movie/api/endpointsKinopoiskApi';
import currentQueryReducer from '../features/searchMovies/model/currentQuerySlice';

export const store = configureStore({
  reducer: {
    currentQuery: currentQueryReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
