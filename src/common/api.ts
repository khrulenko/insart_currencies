import { Dispatch } from '@reduxjs/toolkit';
import { setCurrencies } from '../redux/slices/currenciesSlice';
import { CurrencyNames } from './constants';
import { NBURate } from './types';
import { createRateFromNBUData } from './utils';

const URL_NBU =
  'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export const getNBURates = async (dispatch: Dispatch) => {
  const nbuResponse = await fetch(URL_NBU);
  const data = await nbuResponse.json();

  const nbuRates = data.filter((curr: NBURate) =>
    [CurrencyNames.USD, CurrencyNames.EUR, CurrencyNames.PLN].includes(curr.cc)
  );

  const rates = nbuRates.map((nbuRate: NBURate) =>
    createRateFromNBUData(nbuRate)
  );

  dispatch(setCurrencies(rates));
};
