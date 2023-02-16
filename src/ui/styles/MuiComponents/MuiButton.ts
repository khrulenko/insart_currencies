import { PropsWithTheme } from '../../../common/types';

const MuiButton = {
  styleOverrides: {
    root: ({ theme: { spacing } }: PropsWithTheme) => ({
      minWidth: spacing(1),

      borderRadius: spacing(2),
    }),
  },
};

export default MuiButton;
