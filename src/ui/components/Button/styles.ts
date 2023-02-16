import { StyleFunction } from '../../../common/types';
import { Props } from '.';

const createButtonWrapperStyles: StyleFunction<Props> = ({ isOption }) => {
  const size = isOption ? '16px' : '32px';
  const svgSize = isOption ? '12px' : '24px';

  return {
    width: size,
    height: size,

    svg: {
      width: svgSize,
      height: svgSize,
    },
  };
};

export { createButtonWrapperStyles };
