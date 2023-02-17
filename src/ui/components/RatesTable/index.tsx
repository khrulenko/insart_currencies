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
import { getCurrencies, getServerError } from '../../../redux/store';
import EditableCell from '../EditableCell';
import { createTableWrapperStyles } from './styles';
import FallBackPage from '../FallBackPage';

const TableWrapper = styled(Paper)(createTableWrapperStyles);

const RatesTable = () => {
  const currencies = useSelector(getCurrencies);
  const serverError = useSelector(getServerError);

  return (
    <TableWrapper>
      {serverError ? (
        <FallBackPage />
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Currency</TableCell>
              <TableCell>Rate, UAH</TableCell>
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
      )}
    </TableWrapper>
  );
};

export default RatesTable;
