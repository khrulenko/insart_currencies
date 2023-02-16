import { NBURate } from './types';

const createRateFromNBUData = (nbuRate: NBURate) => {
  const { cc, rate } = nbuRate;

  return { name: cc, initialRate: rate, rate };
};

export { createRateFromNBUData };
