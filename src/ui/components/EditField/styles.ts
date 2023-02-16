import { StyleFunction } from '../../../common/types';

const createFieldStyles: StyleFunction = ({ theme: { spacing } }) => ({
  maxWidth: '120px',

  input: {
    padding: '8px',

    fontSize: '14px',
  },
});

export { createFieldStyles };
