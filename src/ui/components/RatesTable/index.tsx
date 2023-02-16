import { useSelector } from 'react-redux';
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
} from '@mui/material';
import { getCurrencies } from '../../../redux/store';
import EditableCell from '../EditableCell';
import { createTableWrapperStyles } from './styles';

const TableWrapper = styled(Paper)(createTableWrapperStyles);

const RatesTable = () => {
  const currencies = useSelector(getCurrencies);

  return (
    <TableWrapper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell>Rate</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {currencies.map((currency) => (
            <TableRow key={currency.name}>
              <TableCell>{currency.name}</TableCell>
              <EditableCell currency={currency} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>
  );
};

export default RatesTable;
