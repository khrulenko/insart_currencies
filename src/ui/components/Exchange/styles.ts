import { StyleFunction } from '../../../common/types';

const createExchangeWrapperStyles: StyleFunction = ({
  theme: {
    spacing,
    breakpoints: { down },
  },
}) => ({
  display: 'flex',
  flexDirection: 'row',

  gap: spacing(1),

  [down('md')]: {
    flexDirection: 'column',
  },
});

export { createExchangeWrapperStyles };
