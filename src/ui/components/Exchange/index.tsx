import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Stack, styled } from '@mui/material';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import { CurrencyNames } from '../../../common/constants';
import { getCurrencies } from '../../../redux/store';
import SelectCurrency from '../SelectCurrency';
import { createExchangeWrapperStyles } from './styles';

const ExchangeWrapper = styled(Stack)(createExchangeWrapperStyles);

const Exchange = () => {
  const [fromCurr, fromSet] = useState<CurrencyNames>(CurrencyNames.USD);
  const [fromAmount, fromAmountSet] = useState<number>(0);

  const [toCurr, toSet] = useState<CurrencyNames>(CurrencyNames.UAH);
  const [toAmount, toAmountSet] = useState<number>(0);

  const currencies = useSelector(getCurrencies);

  const swap = () => {
    const savedFrom = fromCurr;

    fromSet(toCurr);
    toSet(savedFrom);
  };

  const getRate = (currName: string) => {
    const currentCurr = currencies.find((curr) => curr.name === currName);

    return currentCurr?.rate || 1;
  };

  useEffect(() => {
    let amount = 0;

    if (fromCurr === CurrencyNames.UAH && toCurr === CurrencyNames.UAH) {
      amount = fromAmount;
    }

    if (fromCurr !== CurrencyNames.UAH && toCurr === CurrencyNames.UAH) {
      amount = fromAmount * getRate(fromCurr);
    }

    if (fromCurr === CurrencyNames.UAH && toCurr !== CurrencyNames.UAH) {
      amount = fromAmount / getRate(toCurr);
    }

    if (fromCurr !== CurrencyNames.UAH && toCurr !== CurrencyNames.UAH) {
      amount = (getRate(fromCurr) / getRate(toCurr)) * fromAmount;
    }

    toAmountSet(amount);
  }, [fromCurr, toCurr, fromAmount, currencies]);

  return (
    <ExchangeWrapper>
      <SelectCurrency
        label="type amount"
        amount={fromAmount}
        currency={fromCurr}
        onCurrencyChange={fromSet}
        onAmountChange={fromAmountSet}
      />

      <Button onClick={swap}>
        <SwapHorizRoundedIcon />
      </Button>

      <SelectCurrency
        label="result"
        amount={toAmount}
        currency={toCurr}
        onCurrencyChange={toSet}
        onAmountChange={toAmountSet}
        isDisabled
      />
    </ExchangeWrapper>
  );
};

export default Exchange;
