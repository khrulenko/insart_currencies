import { Currensy } from '../redux/slices/currenciesSlice';
import { CurrencyNames } from './constants';

export const btcMock: Currensy = {
  name: CurrencyNames.BTC,
  initialRate: 941785.81,
  rate: 941785.81,
};

const mockedCurrencies = [
  {
    name: 'USD',
    initialRate: 36.5686,
    rate: 36.5686,
  },
  {
    name: 'EUR',
    initialRate: 38.8377,
    rate: 38.8377,
  },
  {
    name: 'PLN',
    initialRate: 8.1274,
    rate: 8.1274,
  },
  {
    name: 'BTC',
    initialRate: 941785.81,
    rate: 941785.81,
  },
];

export { mockedCurrencies };
