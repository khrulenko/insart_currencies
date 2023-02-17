import { Dispatch } from '@reduxjs/toolkit';
import { setCurrencies } from '../redux/slices/currenciesSlice';
import { setServerError } from '../redux/slices/serverErrorSlice';
import { CurrencyNames } from './constants';
import { btcMock } from './mocks';
import { NBURate } from './types';
import { createRateFromNBUData, getErrorCounterValue } from './utils';

const URL_NBU =
  'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

const currencyNames = Object.values(CurrencyNames);

export const getCurrenciesData = async (dispatch: Dispatch) => {
  const errorCounterValue = getErrorCounterValue();

  try {
    if (errorCounterValue === 5) {
      throw new Error('Oops');
    }

    const nbuResponse = await fetch(URL_NBU);
    const nbuData = await nbuResponse.json();

    const nbuRates = nbuData.filter((curr: NBURate) =>
      currencyNames.includes(curr.cc)
    );

    const nbuRatesData = nbuRates.map((nbuRate: NBURate) =>
      createRateFromNBUData(nbuRate)
    );

    const btcRateData = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(btcMock);
      }, 300);
    });

    dispatch(setCurrencies([...nbuRatesData, btcRateData]));
  } catch (error) {
    dispatch(setServerError(true));
  } finally {
    const nextValue = (errorCounterValue || 1) + 1;
    const newCounterValue = nextValue > 5 ? '1' : String(nextValue);

    localStorage.setItem('errorCounter', newCounterValue);
  }
};
