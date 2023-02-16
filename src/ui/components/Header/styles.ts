import { StyleFunction } from '../../../common/types';

const createHeaderWrapperStyles: StyleFunction = ({ theme: { spacing } }) => ({
  display: 'flex',
  flexDirection: 'column',

  height: '100px',
  padding: spacing(2),

  borderTopLeftRadius: '0px',
  borderTopRightRadius: '0px',

  svg: {
    width: '32px',
    height: '32px',
  },
});

export { createHeaderWrapperStyles };
