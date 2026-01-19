import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  countries: string;
  genreId: string;
  order: string;
  type: string;
  year: string;
  page: number;
}

const initialState: CounterState = {
  countries: '',
  genreId: '',
  order: 'NUM_VOTE',
  type: '',
  year: '',
  page: 1,
};

export const currentQuerySlice = createSlice({
  name: 'currentQuerySlice',
  initialState,
  reducers: {
    // to do
  },
});

export default currentQuerySlice.reducer;
