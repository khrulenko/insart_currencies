import { CSSObject, Theme } from '@mui/material';
import { CurrencyNames } from './constants';

export type AnyFunction = (...args: any[]) => any;

export interface NBURate {
  r030: number;
  txt: string;
  rate: number;
  cc: CurrencyNames;
  exchangedate: string;
}

export type PropsWithTheme<T = any> = { theme: Theme } & T;
export type StyleFunction<T = any> = ({}: PropsWithTheme<T>) => CSSObject;
