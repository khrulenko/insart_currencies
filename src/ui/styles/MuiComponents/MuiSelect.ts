import { PropsWithTheme } from '../../../common/types';

const MuiSelect = {
  styleOverrides: {
    root: ({ theme: { spacing } }: PropsWithTheme) => ({
      maxWidth: '80px',

      borderRadius: spacing(3),
    }),
  },
};

export default MuiSelect;
