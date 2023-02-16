import { NBURate } from './types';

const createRateFromNBUData = (nbuRate: NBURate) => {
  const { cc, rate } = nbuRate;

  return { name: cc, initialRate: rate, rate };
};

const isValueValid = (value: string, initialRate: number) =>
  Number(value) > initialRate * 1.1 || Number(value) < initialRate * 0.9;

export { createRateFromNBUData, isValueValid };
