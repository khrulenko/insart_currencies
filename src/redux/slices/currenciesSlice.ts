import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyNames } from '../../common/constants';

export interface Currensy {
  name: CurrencyNames;
  initialRate: number;
  rate: number;
}

export interface NewCurrencyData {
  name: CurrencyNames;
  rate: number;
}

export type Currencies = Currensy[];

const initialState: Currencies = [];

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setCurrencies(state: Currencies, action: PayloadAction<Currencies>) {
      state.push(...action.payload);

      return state;
    },
    changeCurrency(state: Currencies, action: PayloadAction<NewCurrencyData>) {
      const { name, rate } = action.payload;

      const changingCurrencyIndex = state.findIndex(
        (curr) => curr.name === name
      );

      const changingCurrency = state[changingCurrencyIndex];

      state.splice(changingCurrencyIndex, 1, {
        ...changingCurrency,
        rate: Number(rate),
      });

      return state;
    },
  },
});

export const { setCurrencies, changeCurrency } = currenciesSlice.actions;
export default currenciesSlice.reducer;
