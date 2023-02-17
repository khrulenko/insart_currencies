import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer, { Currencies } from '../slices/currenciesSlice';
import serverErrorReducer, { ServerError } from '../slices/serverErrorSlice';

interface State {
  currencies: Currencies;
  serverError: ServerError;
}

// selectors
const createSelector =
  <K extends keyof State>(dataField: K) =>
  (state: State) =>
    state[dataField];

export const getCurrencies = createSelector('currencies');
export const getServerError = createSelector('serverError');

// redusers
export const reducers = {
  currencies: currenciesReducer,
  serverError: serverErrorReducer,
};

// store
export const store = configureStore({
  reducer: reducers,
});

export default store;
