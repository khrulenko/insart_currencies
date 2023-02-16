import { Currencies } from './constants';

export interface NBURate {
  r030: number;
  txt: string;
  rate: number;
  cc: Currencies;
  exchangedate: string;
}
