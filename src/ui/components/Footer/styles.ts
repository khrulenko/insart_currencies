import { StyleFunction } from '../../../common/types';

const createFooterWrapperStyles: StyleFunction = ({ theme: { spacing } }) => ({
  position: 'fixed',
  bottom: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing(1),

  width: '100%',
  height: '100px',
  padding: spacing(2),

  borderBottomLeftRadius: '0px',
  borderBottomRightRadius: '0px',
});

export { createFooterWrapperStyles };
