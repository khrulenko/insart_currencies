const MuiTableCell = {
  styleOverrides: {
    root: () => ({
      width: '240px',

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
