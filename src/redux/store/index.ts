import { configureStore } from '@reduxjs/toolkit';
import ratesReducer, { Rates } from '../slices/ratesSlice';

interface State {
  rates: Rates;
}

// selectors
const createSelector =
  <K extends keyof State>(dataField: K) =>
  (state: State) =>
    state[dataField];

export const getRates = createSelector('rates');

// redusers
export const reducers = {
  rates: ratesReducer,
};

// store
export const store = configureStore({
  reducer: reducers,
});

export default store;
