const MuiTableCell = {
  styleOverrides: {
    root: () => ({
      width: '240px',
      height: '72px',

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
