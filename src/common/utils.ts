import { Currensy } from '../redux/slices/currenciesSlice';
import { NBURate } from './types';

const createRateFromNBUData = (nbuRate: NBURate): Currensy => {
  const { cc, rate } = nbuRate;

  return { name: cc, initialRate: rate, rate };
};

const isValueValid = (value: string, initialRate: number): boolean =>
  Number(value) > initialRate * 1.1 || Number(value) < initialRate * 0.9;

const getErrorCounterValue = (): number =>
  Number(localStorage.getItem('errorCounter'));

export { createRateFromNBUData, isValueValid, getErrorCounterValue };
