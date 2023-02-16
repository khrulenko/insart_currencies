import { ChangeEvent } from 'react';
import { Stack, styled, TextField } from '@mui/material';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { AnyFunction } from '../../../common/types';
import { createFieldStyles } from './styles';
import Button from '../Button';

interface Props {
  value: string;
  onChange: AnyFunction;
  onCancel: AnyFunction;
  onSave: AnyFunction;
  disabled?: boolean;
}

const Field = styled(TextField)(createFieldStyles);

const EditField = ({ value, onChange, onCancel, onSave, disabled }: Props) => {
  const onChangeHandler = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => onChange(value);

  return (
    <>
      <Field size="small" value={value} onChange={onChangeHandler} />

      <Stack direction="column" spacing="4px">
        <Button
          isOption
          title="Save"
          color="success"
          onClick={onSave}
          disabled={disabled}
        >
          <SaveRoundedIcon />
        </Button>

        <Button isOption title="Cancel" color="error" onClick={onCancel}>
          <CancelRoundedIcon />
        </Button>
      </Stack>
    </>
  );
};

export default EditField;
