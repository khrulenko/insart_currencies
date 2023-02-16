import { Dispatch } from '@reduxjs/toolkit';
import { Currensy, setCurrencies } from '../redux/slices/currenciesSlice';
import { CurrencyNames } from './constants';
import { NBURate } from './types';
import { createRateFromNBUData } from './utils';

const URL_NBU =
  'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

const URL_BTC = 'https://whitebit.com/api/v4/public/ticker';

export const getNBURates = async (dispatch: Dispatch) => {
  const response = await fetch(URL_NBU);
  const data = await response.json();

  const nbuRates = data.filter((curr: NBURate) =>
    [CurrencyNames.USD, CurrencyNames.EUR, CurrencyNames.PLN].includes(curr.cc)
  );

  const rates = nbuRates.map((nbuRate: NBURate) =>
    createRateFromNBUData(nbuRate)
  );

  dispatch(setCurrencies(rates));
};

export const getBTCRate = async (dispatch: Dispatch) => {
  const response = await fetch(URL_BTC);
  const data = await response.json();

  const BTCData = data['BTC_UAH'];

  const BTCCurrency: Currensy = {
    name: CurrencyNames.BTC,
    initialRate: BTCData.last_price,
    rate: BTCData.last_price,
  };

  dispatch(setCurrencies([BTCCurrency]));
};
