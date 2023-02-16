import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Stack, TableCell } from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import EditField from '../EditField';
import Button from '../Button';
import {
  changeCurrency,
  Currensy,
} from '../../../redux/slices/currenciesSlice';
import { isValueValid } from '../../../common/utils';

interface Props {
  currency: Currensy;
}

const EditableCell = ({ currency: { name, initialRate, rate } }: Props) => {
  const [value, valueSet] = useState<string>(String(rate));
  const [isEditMode, isEditModeSet] = useState<boolean>(false);
  const [isValid, isValidSet] = useState<boolean>(true);

  const dispatch = useDispatch();

  const onCancel = () => {
    valueSet(String(rate));
    isEditModeSet(false);
  };

  const onSave = () => {
    dispatch(changeCurrency({ name, rate: Number(value) }));
    isEditModeSet(false);
  };

  const valueProcessAndSet = (value: string) => {
    const newValue = value.match(/^\d*\.?\d*$/);

    if (newValue) valueSet(newValue[0]);
  };

  useEffect(() => {
    if (isValueValid(value, initialRate)) {
      isValidSet(false);
      return;
    }

    isValidSet(true);
  }, [value]);

  return (
    <TableCell>
      <Stack width="100%" alignItems="start">
        <Stack
          spacing={1}
          minWidth="100px"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {isEditMode ? (
            <EditField
              value={value}
              onChange={valueProcessAndSet}
              onCancel={onCancel}
              onSave={onSave}
              disabled={!isValid}
            />
          ) : (
            <span>{rate}</span>
          )}

          {!isEditMode && (
            <Button
              id="editButton"
              title="Edit"
              onClick={() => isEditModeSet(true)}
            >
              <EditRoundedIcon />
            </Button>
          )}
        </Stack>
      </Stack>
    </TableCell>
  );
};

export default EditableCell;
