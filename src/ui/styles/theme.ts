import { createTheme, ThemeOptions } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import MuiCssBaseline from './MuiComponents/MuiCssBaseline';
import MuiPaper from './MuiComponents/MuiPaper';

const palette = {
  primary: {
    light: grey[100],
    main: grey[900],
    dark: grey[700],
    contrastText: '#fff',
  },
  secondary: blueGrey,
};

const theme = createTheme({
  palette,
  components: {
    MuiCssBaseline,
    MuiPaper,
  },
} as ThemeOptions);

export default theme;
