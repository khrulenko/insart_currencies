import { PropsWithTheme } from '../../../common/types';

const MuiPaper = {
  styleOverrides: {
    root: ({
      theme: {
        spacing,
        breakpoints: { up },
      },
    }: PropsWithTheme) => ({
      width: '50%',
      padding: spacing(4),

      borderRadius: spacing(2),

      [up('xs')]: {
        width: '90%',
      },

      [up('sm')]: {
        width: '80%',
      },

      [up('md')]: {
        width: '70%',
      },

      [up('lg')]: {
        width: '60%',
      },
    }),
  },
};

export default MuiPaper;
