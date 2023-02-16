import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { Currencies } from '../../../redux/slices/currenciesSlice';
import EditableCell from '../EditableCell';

interface Props {
  currencies: Currencies;
}

const RatesTable = ({ currencies }: Props) => (
  <Paper>
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
  </Paper>
);
export default RatesTable;
