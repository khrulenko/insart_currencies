import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer, { Currencies } from '../slices/currenciesSlice';

interface State {
  currencies: Currencies;
}

// selectors
const createSelector =
  <K extends keyof State>(dataField: K) =>
  (state: State) =>
    state[dataField];

export const getCurrencies = createSelector('currencies');

// redusers
export const reducers = {
  currencies: currenciesReducer,
};

// store
export const store = configureStore({
  reducer: reducers,
});

export default store;
