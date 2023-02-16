import { NBURate } from './types';

const createRateFromNBUData = (nbuRate: NBURate) => {
  const { cc, rate } = nbuRate;

  return { currency: cc, initialRate: rate, rate };
};

export { createRateFromNBUData };
