import { ChangeEvent } from 'react';
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';
import { CurrencyNames } from '../../../common/constants';
import { AnyFunction } from '../../../common/types';

interface Props {
  currency: CurrencyNames;
  amount: number;
  onCurrencyChange: AnyFunction;
  onAmountChange: AnyFunction;
  label?: string;
  isDisabled?: boolean;
}

const currencyNames = Object.values(CurrencyNames);

const SelectCurrency = ({
  amount,
  currency,
  onAmountChange,
  onCurrencyChange,
  label = '',
  isDisabled = false,
}: Props) => {
  const onAmountChangeHandler = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => onAmountChange(value);

  const onCurrencyChangeHandler = ({
    target: { value },
  }: SelectChangeEvent<CurrencyNames>) => onCurrencyChange(value);

  return (
    <Stack spacing={1} direction="row">
      <TextField
        value={amount}
        onChange={onAmountChangeHandler}
        label={label}
        size="small"
        disabled={isDisabled}
      />

      <Select value={currency} size="small" onChange={onCurrencyChangeHandler}>
        {currencyNames.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};

export default SelectCurrency;
