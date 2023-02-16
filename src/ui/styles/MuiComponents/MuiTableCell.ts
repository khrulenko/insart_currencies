const MuiTableCell = {
  styleOverrides: {
    root: () => ({
      textAlign: 'center',

      '& #editButton': {
        visibility: 'hidden',
      },

      '&:hover': {
        '& #editButton': {
          visibility: 'visible',
        },
      },
    }),
  },
};

export default MuiTableCell;
