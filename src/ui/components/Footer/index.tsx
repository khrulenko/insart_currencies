import { Paper, styled, Typography } from '@mui/material';
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
import { createFooterWrapperStyles } from './styles';

const FooterWrapper = styled(Paper)(createFooterWrapperStyles);

const Footer = () => {
  return (
    <FooterWrapper>
      <CopyrightRoundedIcon />

      <Typography>2023 Khrulenko V.</Typography>
    </FooterWrapper>
  );
};

export default Footer;
