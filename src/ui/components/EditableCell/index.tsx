import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Stack, TableCell } from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import EditField from '../EditField';
import Button from '../Button';
import {
  changeCurrency,
  Currensy,
} from '../../../redux/slices/currenciesSlice';

interface Props {
  currency: Currensy;
}

const EditableCell = ({ currency: { name, initialRate, rate } }: Props) => {
  const [value, valueSet] = useState(rate);
  const [isEditMode, isEditModeSet] = useState(false);

  const dispatch = useDispatch();

  const onCancel = () => {
    valueSet(rate);
    isEditModeSet(false);
  };

  const onSave = () => {
    dispatch(changeCurrency({ name, rate: value }));
    isEditModeSet(false);
  };

  return (
    <TableCell>
      <Stack width="100%" alignItems="center">
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
              onChange={valueSet}
              onCancel={onCancel}
              onSave={onSave}
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
