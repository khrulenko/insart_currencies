import { Theme } from '@mui/material';
import { Currencies } from './constants';

export interface NBURate {
  r030: number;
  txt: string;
  rate: number;
  cc: Currencies;
  exchangedate: string;
}

export type PropsWithTheme<T = any> = { theme: Theme } & T;
