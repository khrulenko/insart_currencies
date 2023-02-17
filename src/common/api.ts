import { Dispatch } from '@reduxjs/toolkit';
import { Currensy, setCurrencies } from '../redux/slices/currenciesSlice';
import { CurrencyNames } from './constants';
import { NBURate } from './types';
import { createRateFromNBUData } from './utils';

const URL_NBU =
  'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

const URL_BTC = 'https://whitebit.com/api/v4/public/ticker';

const currencyNames = Object.values(CurrencyNames);

export const getCurrenciesData = async (dispatch: Dispatch) => {
  const nbuResponse = await fetch(URL_NBU);
  const nbuData = await nbuResponse.json();

  const btcResponse = await fetch(URL_BTC);
  const btcRate = await btcResponse.json();

  const nbuRates = nbuData.filter((curr: NBURate) =>
    currencyNames.includes(curr.cc)
  );

  const nbuRatesData = nbuRates.map((nbuRate: NBURate) =>
    createRateFromNBUData(nbuRate)
  );

  const btcData = btcRate['BTC_UAH'];

  const btcCurrency: Currensy = {
    name: CurrencyNames.BTC,
    initialRate: btcData.last_price,
    rate: btcData.last_price,
  };

  dispatch(setCurrencies([...nbuRatesData, btcCurrency]));
};
