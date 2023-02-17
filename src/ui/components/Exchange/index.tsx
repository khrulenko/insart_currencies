import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Stack, styled } from '@mui/material';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import { CurrencyNames } from '../../../common/constants';
import { getCurrencies, getServerError } from '../../../redux/store';
import SelectCurrency from '../SelectCurrency';
import { createExchangeWrapperStyles } from './styles';
import { roundTo } from '../../../common/utils';

const ExchangeWrapper = styled(Stack)(createExchangeWrapperStyles);

const Exchange = () => {
  const [fromCurr, fromCurrSet] = useState<CurrencyNames>(CurrencyNames.USD);
  const [fromAmount, fromAmountSet] = useState<number>(0);

  const [toCurr, toCurrSet] = useState<CurrencyNames>(CurrencyNames.UAH);
  const [toAmount, toAmountSet] = useState<number>(0);

  const roundedtoAmount = roundTo(toAmount, 10);
  const currencies = useSelector(getCurrencies);
  const serverError = useSelector(getServerError);

  const swap = () => {
    const savedFrom = fromCurr;

    fromCurrSet(toCurr);
    toCurrSet(savedFrom);
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
        label="Change"
        amount={fromAmount}
        currency={fromCurr}
        onCurrencyChange={fromCurrSet}
        onAmountChange={fromAmountSet}
        isDisabled={serverError}
      />

      <Button data-testid="swapButton" onClick={swap}>
        <SwapHorizRoundedIcon />
      </Button>

      <SelectCurrency
        label="Get"
        amount={roundedtoAmount}
        currency={toCurr}
        onCurrencyChange={toCurrSet}
        onAmountChange={toAmountSet}
        isDisabled
      />
    </ExchangeWrapper>
  );
};

export default Exchange;
