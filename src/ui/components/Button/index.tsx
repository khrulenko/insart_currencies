import { ReactNode } from 'react';
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
  styled,
  Tooltip,
} from '@mui/material';
import { AnyFunction } from '../../../common/types';
import { createButtonWrapperStyles } from './styles';

const ButtonWrapper = styled(MUIButton)(createButtonWrapperStyles);

interface CustomProps {
  title?: string;
  id?: string;
  onClick: AnyFunction;
  children?: ReactNode;
  isOption?: boolean;
}

export type Props = CustomProps & MUIButtonProps;

const Button = ({
  title = '',
  id = '',
  onClick,
  children,
  isOption = false,
  ...props
}: Props) => {
  return (
    <Tooltip title={title} placement="top" followCursor>
      <ButtonWrapper
        isOption={isOption}
        id={id}
        variant="contained"
        onClick={onClick}
        {...props}
      >
        {children}
      </ButtonWrapper>
    </Tooltip>
  );
};

export default Button;
