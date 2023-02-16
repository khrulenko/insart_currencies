import { Dispatch } from '@reduxjs/toolkit';
import { setRates } from '../redux/slices/ratesSlice';
import { Currencies } from './constants';
import { NBURate } from './types';
import { createRateFromNBUData } from './utils';

const URL_NBU =
  'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export const getNBURates = async (dispatch: Dispatch) => {
  const nbuResponse = await fetch(URL_NBU);
  const data = await nbuResponse.json();

  const nbuRates = data.filter((curr: NBURate) =>
    [Currencies.USD, Currencies.EUR, Currencies.PLN].includes(curr.cc)
  );

  const rates = nbuRates.map((nbuRate: NBURate) =>
    createRateFromNBUData(nbuRate)
  );

  dispatch(setRates(rates));
};
