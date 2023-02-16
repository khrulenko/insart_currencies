import { StyleFunction } from '../../../common/types';

const createTableWrapperStyles: StyleFunction = ({
  theme: {
    spacing,
    breakpoints: { up },
  },
}) => ({
  width: '50%',
  padding: spacing(4),

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
});

export { createTableWrapperStyles };
