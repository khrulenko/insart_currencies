import { Paper, styled, Typography } from '@mui/material';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import { createHeaderWrapperStyles } from './styles';

const HeaderWrapper = styled(Paper)(createHeaderWrapperStyles);

const Header = () => {
  return (
    <HeaderWrapper>
      <Typography fontWeight="bold" variant="h6">
        Currensy exhange app
      </Typography>

      <CurrencyExchangeRoundedIcon />
    </HeaderWrapper>
  );
};

export default Header;
