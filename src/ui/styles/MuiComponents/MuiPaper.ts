import { PropsWithTheme } from '../../../common/types';

const MuiPaper = {
  styleOverrides: {
    root: ({ theme: { spacing } }: PropsWithTheme) => ({
      width: '50%',
      padding: spacing(4),

      borderRadius: spacing(2),
    }),
  },
};

export default MuiPaper;
