import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Currencies } from '../../common/constants';

export interface Rate {
  currency: Currencies;
  initialRate: number;
  rate: number;
}

export type Rates = Rate[];

const ratesSlice = createSlice({
  name: 'rates',
  initialState: [] as Rates,
  reducers: {
    setRates(state: Rates, action: PayloadAction<any>) {
      state = action.payload;

      return state;
    },
  },
});

export const { setRates } = ratesSlice.actions;
export default ratesSlice.reducer;
